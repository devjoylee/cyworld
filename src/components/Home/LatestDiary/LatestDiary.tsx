import { useQuery } from '@apollo/client'
import { GET_DIARY_LIST } from '@queries/diary'
import { SectionTitle } from '@components/Common'
import { Diary } from '@types'
import styles from './LatestDiary.module.scss'
import Link from 'next/link'

export const LatestDiary = () => {
  const { data, loading } = useQuery(GET_DIARY_LIST, { variables: { page: 1 } })
  const latest = !loading ? (data.fetchBoards.slice(0, 4) as Diary[]) : []

  return (
    <section className={styles.latest_diary}>
      <SectionTitle title='Update news' />
      <ul className={styles.diary_list}>
        {latest.map(({ title, number }) => (
          <li key={number}>
            <Link href={`/diary/${number}`}>
              <a>
                <img src='/icons/diary.svg' alt='icon' />
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
