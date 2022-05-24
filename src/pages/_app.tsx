import '../styles/globals.css'
import App, { AppContext } from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'

interface Props extends AppProps {
  appVersion: {
    version: number
    logoSmall: string | null
    logoLarge: string | null
    pdpa: string | null
    pdpaStatus: boolean
    facebookPixel: string | null
    facebookPixelStatus: boolean
    googleAnalyze: string | null
    googleAnalyzeStatus: boolean
    anouncement: string | null
    anoncementStatus: null
  }
}

function MyApp({ Component, pageProps, appVersion }: Props) {
  // console.log(appVersion)
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//   const appVersion = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API as string}/apps/1`)
//   const jsonAppVersion = await appVersion.json()
//   return { ...appProps, appVersion: jsonAppVersion }
// }

export default MyApp
