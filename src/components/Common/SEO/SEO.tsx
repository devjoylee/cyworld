import Head from 'next/head'

export const SEO = ({ title }: { title: string }) => {
  const text = title + ' | Cyworld via Numble'
  return (
    <Head>
      <title>{text}</title>
    </Head>
  )
}
