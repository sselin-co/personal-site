import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/home/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal website for Shaya Selincourt, a software engineer based in Vancouver, BC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
