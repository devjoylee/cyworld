import styles from './Contents.module.scss'

interface Props {
  children: React.ReactNode
}

export const Contents = ({ children }: Props) => {
  return (
    <div className={styles.contents}>
      <div className='container'>{children}</div>
    </div>
  )
}
