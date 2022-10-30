import styles from './GameSection.module.scss'

interface Props {
  name: string
  img: string
  className: string
  children: React.ReactNode
}

export const GameSection = ({ name, img, className, children }: Props) => {
  return (
    <section className={`${styles.game_section} ${className}`}>
      <img src={img} alt='icon' />
      <h3>{name}</h3>
      <div>{children}</div>
    </section>
  )
}
