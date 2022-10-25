import styles from './TodayCount.module.scss'

export const TodayCount = () => {
  return (
    <ul className={styles.today_count}>
      <li className={styles.today}>
        TODAY <span>0</span>
      </li>
      <li>
        TOTAL <span>12345</span>
      </li>
    </ul>
  )
}
