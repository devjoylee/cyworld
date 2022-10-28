import { SectionTitle } from '@components/Common'
import styles from './LatestDiary.module.scss'

export const LatestDiary = () => {
  return (
    <section className={styles.latest_diary}>
      <SectionTitle title='Update news' />
    </section>
  )
}
