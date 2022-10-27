import { SEO } from '@components/Common'
import { HomeNav, LatestDiary } from '@components/Home'
import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <SEO title='HOME' />
      <div className={styles.row_wrapper}>
        <LatestDiary />
        <HomeNav />
      </div>
    </>
  )
}
