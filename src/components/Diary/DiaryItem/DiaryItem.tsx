import { Diary } from '@types'
import { getDate } from '@utils'
import styles from './DiaryItem.module.scss'

interface Props {
  diaryData: Diary
}

export const DiaryItem = ({ diaryData }: Props) => {
  const { title, createdAt, number } = diaryData

  return (
    <li key={number} className={styles.diary}>
      <div className={styles.content}>
        <span>{getDate(createdAt)}</span>
        <h3>제목 : {title}</h3>
      </div>
      <button>자세히 보러가기&nbsp;</button>
    </li>
  )
}
