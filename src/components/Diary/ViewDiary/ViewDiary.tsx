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
      <div className={styles.date}>{getDate(createdAt as string)}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{contents}</p>
      </div>
    </section>
  )
}
