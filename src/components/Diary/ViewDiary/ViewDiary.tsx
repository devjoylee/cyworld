import Link from 'next/link'
import { Diary } from '@types'
import { getDate } from '@utils'
import styles from './ViewDiary.module.scss'

interface Props {
  diaryData: Diary
}

export const ViewDiary = ({ diaryData }: Props) => {
  const { title, contents, createdAt } = diaryData

  return (
    <section className={styles.view_diary}>
      <div className={styles.date}>{getDate(createdAt)}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{contents}</p>
      </div>
      <Link href='/diary'> 목록으로</Link>
    </section>
  )
}
