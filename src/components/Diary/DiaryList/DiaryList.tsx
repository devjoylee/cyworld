import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'
import { DiaryItem } from '@components/Diary'
import { Diary } from '@types'
import styles from './DiaryList.module.scss'

export const DiaryList = () => {
  const { data, loading } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const latest = !loading ? (data.fetchBoards.slice(0, 5) as Diary[]) : []

  return (
    <ul className={styles.diary_list}>
      {latest.map((data) => (
        <DiaryItem key={data.number} diaryData={data} />
      ))}
    </ul>
  )
}
