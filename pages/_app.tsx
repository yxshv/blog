import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/prism.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className='prose py-11 px-6 lg:prose-xl'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
