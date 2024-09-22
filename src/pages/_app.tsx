import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { useStore } from '../store'


const  App = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Head>
        <title>HTTPOnly Auth</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link 
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        rel='stylesheet' 
        integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH'
        ></link>
      </Head>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
      ></Script>
      <Component {...pageProps} />
    </Provider>
  )
}
