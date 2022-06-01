import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCookie } from 'cookies-next'

const MyDocument = (props: any) => {
  return (
    <Html lang='en'>
      <Head>
        <noscript>
          {props.fbState && props.acceptCookie && (
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${props.fbId}&ev=PageView&noscript=1`}
            />
          )}
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (documentContext: DocumentContext) => {
  const props = await Document.getInitialProps(documentContext)
  const fbId = documentContext.req && getCookie('FB_ID', { req: documentContext.req, res: documentContext.res })
  const fbState = documentContext.req && getCookie('FB_STATE', { req: documentContext.req, res: documentContext.res })
  const acceptCookie =
    documentContext.req && getCookie('accept-cookie', { req: documentContext.req, res: documentContext.res })

  return { ...props, fbId, fbState, acceptCookie }
}

export default MyDocument
