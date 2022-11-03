import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_DIARY, GET_DIARY_ITEM } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { EditDeleteButton, ViewDiary } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryContent() {
  const router = useRouter()
  const id = router.query.id as string

  // Fetching diary contents
  const { data, loading } = useQuery(GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })
  const contents = data?.fetchBoard as Diary

  // Deleting diary contents
  const [deleteDiary] = useMutation(DELETE_DIARY)
  const deleteAction = async () => {
    if (confirm('다이어리를 삭제하시겠습니까?')) {
      await deleteDiary({ variables: { number: Number(id) } })
      router.push('/diary')
    }
  }

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' />
      {<ViewDiary diaryData={contents || defaultContent} />}
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
