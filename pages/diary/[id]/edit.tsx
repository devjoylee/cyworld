import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { SectionTitle, SEO } from '@components/Common'
import { SubmitButton, TextEditor } from '@components/Diary'
import { usePost } from '@hooks/usePost'
import { Diary } from '@types'
import * as Q from '@queries/diary'

export default function DiaryEdit() {
  const router = useRouter()
  const id = router.query.id as string
  const { diary, setDiary, handleChange, validate } = usePost()

  // Fetching diary contents
  const { data, loading, refetch } = useQuery(Q.GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })

  const [updateDiary] = useMutation(Q.UPDATE_DIARY)

  const handleSubmit = async () => {
    if (validate()) {
      try {
        await updateDiary({
          variables: {
            number: Number(id),
            writer: 'Joy',
            title: diary.title,
            contents: diary.contents,
          },
          onCompleted: () => {
            alert('게시물 수정에 성공했습니다!')
            refetch()
            router.push(`/diary/${id}`)
          },
        })
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
  }, [data, loading, setDiary])

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
