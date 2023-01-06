import styles from './Header.module.scss'
import { TodayCount } from '../TodayCount/TodayCount'

export const Header = () => {
  return (
    <div className={styles.header}>
      <TodayCount />
      <h1 className={styles.title}>Welcome to Cyworld</h1>
      <span className={styles.option_btn}>
        사생활보호설정 <b>▶️</b>
      </span>
    </div>
  )
}
