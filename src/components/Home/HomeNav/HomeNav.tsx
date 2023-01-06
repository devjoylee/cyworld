import styles from './HomeNav.module.scss'

export const HomeNav = () => {
  return (
    <section className={styles.home_nav}>
      <ul className={styles.row}>
        <li>
          Diary <span>0/65</span>
        </li>
        <li>
          Photos <span>0/265</span>
        </li>
      </ul>
      <ul className={styles.row}>
        <li>
          Board <span>0/15</span>
        </li>
        <li>
          Notes <span>0/15</span>
        </li>
      </ul>
      <ul className={styles.row}></ul>
    </section>
  )
}
