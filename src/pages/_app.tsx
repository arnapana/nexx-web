import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { setCookies, getCookie, checkCookies } from 'cookies-next'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { PdpaPopup } from '@components/common'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'
import {} from 'cookie'

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
    <RecoilRoot>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      /> */}
      {/* Global Site Code Pixel - Facebook Pixel */}
      {/* <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `
        }}
      /> */}
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <Component {...pageProps} />
      <PdpaPopup isClose={isOpen} onChangeHandle={handleChangeModal} />
    </RecoilRoot>
  )
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const appVersion = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API as string}/apps/1`)
  const jsonAppVersion = await appVersion.json()
  return { ...appProps, appVersion: jsonAppVersion }
}

export default MyApp
