import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }
 
// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)
 
//   return getLayout(<Component {...pageProps} />)
// }

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}