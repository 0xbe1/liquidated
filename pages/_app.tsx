import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        data-token="KPQ7UIYRUIQG"
        async
        src="https://cdn.splitbee.io/sb.js"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
