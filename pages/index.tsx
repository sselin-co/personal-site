import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='font-sans'>
      <Header />
    </div>
  )
}

export default Home
