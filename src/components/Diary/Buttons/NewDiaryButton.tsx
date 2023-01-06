import Link from 'next/link'
import styles from './Buttons.module.scss'

export const NewDiaryButton = () => {
  return (
    <Link href='/diary/new'>
      <button className={styles.new_btn}>New Diary</button>
    </Link>
  )
}
