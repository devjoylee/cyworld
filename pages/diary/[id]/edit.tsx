import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { GET_DIARY_ITEM, UPDATE_DIARY } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { SubmitButton, TextEditor } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryEdit() {
  const router = useRouter()
  const id = router.query.id as string
  const [diary, setDiary] = useState({ title: '', contents: '' })

  // Fetching diary contents
  const { data, loading } = useQuery(GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })

  const [mutateTriggerFunction] = useMutation(UPDATE_DIARY)

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
        await mutateTriggerFunction({
          variables: {
            number: Number(id),
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
        })
        alert('게시물 수정에 성공했습니다!')
        router.push(`/diary/${id}`)
        //
      } catch (error) {
        alert('문제가 발생했습니다')
      }
    }
  }

  useEffect(() => {
    const diaryData = !loading ? (data.fetchBoard as Diary) : defaultContent
    setDiary({
      title: diaryData.title,
      contents: diaryData.contents,
    })
  }, [data, loading])

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' diary='글 수정' />
      <TextEditor handleChange={handleChange} diary={diary} />
      <SubmitButton type='edit' handleSubmit={handleSubmit} />
    </>
  )
}

const defaultContent = {
  title: '',
  contents: '',
  number: 0,
  createdAt: '',
}
