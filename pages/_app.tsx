import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
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
    <Component {...pageProps} />
  ) as ReactElement

  return <AppProviders>{app}</AppProviders>
}

export default MyApp
