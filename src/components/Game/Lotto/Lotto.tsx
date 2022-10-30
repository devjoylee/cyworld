import { GameSection } from '@components/Game'
import styles from './Lotto.module.scss'

export const Lotto = () => {
  return (
    <GameSection
      name='LOTTO'
      img='https://codecampnumble.shop/images/lotto.png'
      className={styles.lotto}
    >
      <p></p>
    </GameSection>
  )
}
