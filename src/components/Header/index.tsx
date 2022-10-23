import styles from './Header.module.css'
import { TodayCount } from './TodayCount'

export const Header = () => {
  return (
    <div className={styles.header}>
      <TodayCount />
      <h1 className={styles.title}>사이좋은 사람들, 싸이월드</h1>
      <span className={styles.option_btn}>
        사생활보호설정 <b>▶️</b>
      </span>
    </div>
  )
}
