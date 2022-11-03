import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'
import { SectionTitle, SEO } from '@components/Common'
import { DiaryList, NewDiaryButton } from '@components/Diary'
import { Diary } from '@types'

export default function DiaryPage() {
  const { data, loading, refetch } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const diaryData = !loading && data ? (data.fetchBoards.slice(0, 5) as Diary[]) : []

  useEffect(() => {
    refetch()
  })

  return (
    <>
      <SEO title='DIARY' />
      <SectionTitle title='Diary' subtitle='TODAY STORY' mb />
      <NewDiaryButton />
      <DiaryList diaryData={diaryData} />
    </>
  )
}
