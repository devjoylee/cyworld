import { SectionTitle, SEO } from '@components/Common'
import styles from './game.module.scss'

export default function Game() {
  return (
    <>
      <SEO title='GAME' />
      <SectionTitle title='Game' subtitle='TODAY CHOICE' mb />
      <div className={styles.games}>
        <section className={`${styles.game_section} ${styles.wordchain}`}>
          <img src='https://codecampnumble.shop/images/train.png' alt='' />
          <p>끝말잇기</p>
        </section>
        <section className={`${styles.game_section} ${styles.lotto}`}>
          <img src='https://codecampnumble.shop/images/lotto.png' alt='' />
          <p>LOTTO</p>
        </section>
      </div>
    </>
  )
}
