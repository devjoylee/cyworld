import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_DIARY_ITEM } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { EditDeleteButton, ViewDiary } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryContent() {
  const router = useRouter()
  const id = router.query.id as string
  const { data, loading } = useQuery(GET_DIARY_ITEM, {
    variables: { number: Number(id) },
  })
  const contents = !loading ? (data.fetchBoard as Diary) : defaultContent

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' />
      <ViewDiary diaryData={contents} />
      <EditDeleteButton id={id} />
    </>
  )
}

const defaultContent = {
  title: '',
  contents: '',
  number: 0,
  createdAt: '',
}
