import styles from './Contents.module.css'

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
