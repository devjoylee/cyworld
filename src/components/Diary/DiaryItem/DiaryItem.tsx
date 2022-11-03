import { Diary } from '@types'
import { getDate } from '@utils'
import Link from 'next/link'
import styles from './DiaryItem.module.scss'

interface Props {
  diaryData: Diary
}

export const DiaryItem = ({ diaryData }: Props) => {
  const { title, createdAt, number } = diaryData
  const linkTo = `/diary/${number}`

  return (
    <li key={number} className={styles.diary}>
      <div className={styles.content}>
        <span>{getDate(createdAt)}</span>
        <h3>제목 : {title}</h3>
      </div>
      <Link href={linkTo}>
        <button>자세히 보러가기&nbsp;</button>
      </Link>
    </li>
  )
}
