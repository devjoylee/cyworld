import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { SectionTitle, SEO } from '@components/Common'
import { EditDeleteButton, ViewDiary } from '@components/Diary'
import { Diary } from '@types'
import * as Q from '@queries/diary'

export default function DiaryContent() {
  const router = useRouter()
  const id = router.query.id as string

  // Fetching diary contents
  const { data, loading } = useQuery(Q.GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })
  const diaryData = !loading && data ? (data?.fetchBoard as Diary) : defaultContent

  // Deleting diary contents
  const [deleteDiary] = useMutation(Q.DELETE_DIARY)
  const deleteAction = async () => {
    if (confirm('다이어리를 삭제하시겠습니까?')) {
      await deleteDiary({
        variables: { number: Number(id) },
        onCompleted: () => {
          alert('삭제 성공!')
          router.push('/diary')
        },
        refetchQueries: [{ query: Q.GET_DIARY_LIST }],
      })
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' />
      <ViewDiary diaryData={diaryData} />
      <EditDeleteButton id={id} deleteDiary={deleteAction} />
    </>
  )
}

const defaultContent = {
  title: '',
  contents: '',
  number: 0,
  createdAt: '',
}
