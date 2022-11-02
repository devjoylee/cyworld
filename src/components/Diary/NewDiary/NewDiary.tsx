import Link from 'next/link'
import styles from './NewDiary.module.scss'

export const NewDiary = () => {
  return (
    <section className={styles.new_diary}>
      <input type='text' placeholder='제목을 입력해주세요' />
      <textarea></textarea>
    </section>
  )
}
