import styles from './ContentWrap.module.scss'

interface Props {
  children: React.ReactNode
}

export const ContentWrap = ({ children }: Props) => {
  return (
    <div className={styles.contents}>
      <div className='container'>{children}</div>
    </div>
  )
}
