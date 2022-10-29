import styles from './GameSection.module.scss'

interface Props {
  name: string
  img: string
  children: React.ReactNode
}

export const GameSection = ({ name, img, children }: Props) => {
  return (
    <section className={styles.game_section}>
      <img src={img} alt='icon' />
      <h3>{name}</h3>
      <div>{children}</div>
    </section>
  )
}
