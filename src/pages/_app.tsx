import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { setCookies, getCookie, checkCookies } from 'cookies-next'
import App, { AppContext, AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { PdpaPopup } from '@components/common'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'
import * as gtag from '@utils/gtag'
import * as fbq from '@utils/fbpixel'

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
  const router = useRouter()
  const [isOpen, setOpen] = useState<boolean>(true)
  const [isChoice, setChoice] = useState<boolean>(false)

  const handleChangeModal = (state: boolean, action: boolean) => {
    setOpen(state)

    if (action) {
      setChoice(action)
      setCookies('accept-cookie', action, { maxAge: 60 * 6 * 24 })
    }
  }

  // GA
  useEffect(() => {
    fbq.pageview()

    const gtagId = getCookie('GTAG_ID')
    const handleRouteChange = (url: string) => {
      gtag.pageview(url, gtagId)
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    if (checkCookies('accept-cookie')) {
      const accept = getCookie('accept-cookie')
      const statePdpa = Boolean(accept)
      setChoice(statePdpa)
      setOpen(!statePdpa)
    }
    setCookies('PDPA', appVersion.pdpa || '')
    setCookies('PDPA_STATE', JSON.stringify(appVersion.pdpaStatus || false))
    setCookies('FB_ID', appVersion.facebookPixel || '')
    setCookies('FB_STATE', JSON.stringify(appVersion.facebookPixelStatus || false))
    setCookies('GTAG_ID', appVersion.googleAnalyze || '')
    setCookies('GTAG_STATE', JSON.stringify(appVersion.googleAnalyzeStatus || ''))
    setCookies('ANOUNCEMENT', appVersion.anouncement || '')
    setCookies('ANOUNCEMENTSTATE', JSON.stringify(appVersion.anoncementStatus || false))
  }, [appVersion])
  return (
    <RecoilRoot>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {isChoice && (
        <>
          {appVersion.googleAnalyze && appVersion.googleAnalyzeStatus && (
            <>
              <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${appVersion.googleAnalyze}`}
              />
              <Script
                id='gtag-init'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${appVersion.googleAnalyze}', {
              page_path: window.location.pathname,
            });
          `
                }}
              />
            </>
          )}
          {/* Global Site Code Pixel - Facebook Pixel */}
          {appVersion.facebookPixel && appVersion.facebookPixelStatus && (
            <Script
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
            fbq('init', ${appVersion.facebookPixel});
          `
              }}
            />
          )}
        </>
      )}
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

  appContext.ctx.res?.setHeader('FB_ID', 1)

  return { ...appProps, appVersion: jsonAppVersion }
}

export default MyApp
