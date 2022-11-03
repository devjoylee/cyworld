import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { CREATE_DIARY } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { SubmitButton, TextEditor } from '@components/Diary'
import { useId } from '@hooks/useId'

export default function DiaryNew() {
  const router = useRouter()
  const newId = useId()
  const [diary, setDiary] = useState({ title: '', contents: '' })
  const [createDiary] = useMutation(CREATE_DIARY)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    if (!diary.title) {
      alert('제목을 입력하세요')
    } else if (!diary.contents) {
      alert('내용을 입력하세요')
    } else {
      try {
        await createDiary({
          variables: {
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
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
      <TextEditor handleChange={handleChange} diary={diary} />
      <SubmitButton type='add' handleSubmit={handleSubmit} />
    </>
  )
}
