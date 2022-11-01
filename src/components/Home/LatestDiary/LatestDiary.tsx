import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'
import { SectionTitle } from '@components/Common'
import { DiaryList } from '@types'
import styles from './LatestDiary.module.scss'

export const LatestDiary = () => {
  const { data, loading, error } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const latest = !loading ? (data.fetchBoards.slice(0, 4) as DiaryList[]) : []

  return (
    <section className={styles.latest_diary}>
      <SectionTitle title='Update news' />
      <ul className={styles.diary_list}>
        {latest.map(({ title, number }) => (
          <li key={number}>
            <img src='/icons/diary.svg' alt='icon' />
            {title}
          </li>
        ))}
      </ul>
    </section>
  )
}
