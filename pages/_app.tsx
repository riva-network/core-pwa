import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'

import AppProviders from '../components/layouts/AppProviders'


import '../styles/globals.css'


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const app = getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

      </Head>
      <Component {...pageProps} />
    </>
  ) as ReactElement

  return <AppProviders>{app}</AppProviders>
}

export default MyApp
