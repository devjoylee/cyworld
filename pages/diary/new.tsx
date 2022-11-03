import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { CREATE_DIARY } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { NewDiary, SubmitButton } from '@components/Diary'
import { useId } from '@hooks/useId'

export default function DiaryNew() {
  const router = useRouter()
  const newId = useId()
  const [diary, setDiary] = useState({ title: '', contents: '' })
  const [mutateTriggerFunction] = useMutation(CREATE_DIARY)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    const writer = 'Joy'
    const title = diary.title
    const contents = diary.contents

    if (!title) {
      alert('제목을 입력하세요')
    } else if (!contents) {
      alert('내용을 입력하세요')
    } else {
      try {
        await mutateTriggerFunction({
          variables: { writer, title, contents },
        })
        alert('다이어리 등록 성공!')
        router.push(`/diary/${newId}`)
        //
      } catch (error) {
        alert('문제가 발생했습니다')
      }
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' diary='글 등록' />
      <NewDiary handleChange={handleChange} diary={diary} />
      <SubmitButton handleSubmit={handleSubmit} />
    </>
  )
}
