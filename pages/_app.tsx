import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/prism.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className='prose py-11 px-6 p-rose sm:prose-xl'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
