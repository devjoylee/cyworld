import { Header, Profile, Contents } from '@components'
import { Navbar } from '@components/Common'
import styles from './Layout.module.css'

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
          <Contents>{children}</Contents>
          <Navbar />
        </div>
      </div>
    </div>
  )
}
