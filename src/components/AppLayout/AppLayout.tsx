import { Header, Profile } from '@components'
import { ContentWrap, Navbar } from '@components/Common'
import styles from './AppLayout.module.scss'

interface Props {
  children: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.innerbox}>
        <Header />
        <div className={styles.app_container}>
          <Profile />
          <ContentWrap>{children}</ContentWrap>
          <Navbar />
        </div>
      </div>
    </div>
  )
}
