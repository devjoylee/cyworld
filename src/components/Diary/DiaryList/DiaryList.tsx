import { DiaryItem } from '@components/Diary'
import { Diary } from '@types'
import styles from './DiaryList.module.scss'

interface Props {
  diaryData: Diary[]
}

export const DiaryList = ({ diaryData }: Props) => {
  return (
    <ul className={styles.diary_list}>
      {diaryData.map((data) => (
        <DiaryItem key={data.number} diaryData={data} />
      ))}
    </ul>
  )
}
