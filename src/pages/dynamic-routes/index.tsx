import React from 'react'

import { DynamicPageIntro } from '@/containers'
import Head from 'next/head'

export default function DynamicRoutes(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dynamic Routes | Nata.House NextJs</title>
      </Head>
      <main>
        <DynamicPageIntro />
      </main>
    </>
  )
}
