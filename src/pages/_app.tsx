import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { setCookies, getCookie, checkCookies } from 'cookies-next'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { PdpaPopup } from '@components/common'

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
  const [isOpen, setOpen] = useState<boolean>(true)
  const [isChoice, setChoice] = useState<boolean>(false)

  const handleChangeModal = (state: boolean, action: boolean) => {
    console.log(state)
    setOpen(state)

    if (action) {
      setChoice(action)
      setCookies('accept-cookie', action, { maxAge: 60 * 6 * 24 })
    }
  }

  useEffect(() => {
    if (checkCookies('accept-cookie')) {
      const accept = getCookie('accept-cookie')
      const statePdpa = Boolean(accept)
      setChoice(statePdpa)
      setOpen(!statePdpa)
    }
  }, [])
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <Component {...pageProps} />
      <PdpaPopup isClose={isOpen} onChangeHandle={handleChangeModal} />
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
