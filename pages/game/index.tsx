import { SectionTitle, SEO } from '@components/Common'
import { Lotto, WordChain } from '@components/Game'
import styles from './game.module.scss'

export default function Game() {
  return (
    <>
      <SEO title='GAME' />
      <SectionTitle title='Game' subtitle='TODAY CHOICE' mb />
      <div className={styles.games}>
        <WordChain />
        <Lotto />
      </div>
    </>
  )
}
