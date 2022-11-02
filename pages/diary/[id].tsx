import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_DIARY_ITEM } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { ViewDiary } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryContent() {
  const router = useRouter()
  const { data, loading } = useQuery(GET_DIARY_ITEM, {
    variables: { number: Number(router.query.id) },
  })
  const contents = !loading ? (data.fetchBoard as Diary) : defaultContent

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' />
      {!loading && <ViewDiary diaryData={contents} />}
    </>
  )
}

const defaultContent = {
  title: '',
  contents: '',
  number: 0,
  createdAt: '',
}
