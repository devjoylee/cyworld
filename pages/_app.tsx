import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { AppLayout } from '@components/AppLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
