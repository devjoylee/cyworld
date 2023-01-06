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
        <span>{getDate(createdAt as string)}</span>
        <h3>Title : {title}</h3>
      </div>
      <Link href={linkTo}>
        <button>Read More&nbsp;</button>
      </Link>
    </li>
  )
}
