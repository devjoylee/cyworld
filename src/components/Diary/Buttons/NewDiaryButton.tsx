import Link from 'next/link'
import styles from './Buttons.module.scss'

export const NewDiaryButton = () => {
  return (
    <Link href='/diary/new'>
      <button className={styles.new_btn}>다이어리 작성</button>
    </Link>
  )
}
