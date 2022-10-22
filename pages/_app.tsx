import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.bg}>
      <div className={styles.innerbox}></div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
