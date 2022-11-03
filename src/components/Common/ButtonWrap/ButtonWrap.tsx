import styles from './ButtonWrap.module.scss'

interface Props {
  children: React.ReactNode
}

export const ButtonWrap = ({ children }: Props) => {
  return <div className={styles.btn_wrap}>{children}</div>
}
