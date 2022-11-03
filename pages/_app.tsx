import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppLayout } from '@components'
import '@styles/globals.scss'

const client = new ApolloClient({
  uri: 'http://practice.codebootcamp.co.kr/graphql',
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  )
}
