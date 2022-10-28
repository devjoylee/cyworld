import styles from './HomeNav.module.scss'

export const HomeNav = () => {
  return (
    <section className={styles.home_nav}>
      <ul className={styles.row}>
        <li>
          다이어리 <span>0/65</span>
        </li>
        <li>
          사진첩 <span>0/265</span>
        </li>
      </ul>
      <ul className={styles.row}>
        <li>
          게시판 <span>0/15</span>
        </li>
        <li>
          방명록 <span>0/15</span>
        </li>
      </ul>
      <ul className={styles.row}></ul>
    </section>
  )
}
