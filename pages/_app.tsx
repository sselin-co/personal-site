import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { DefaultSeo } from 'next-seo'

const url = "https://sselin.co";

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='font-sans'>
    <DefaultSeo
      titleTemplate="Shaya Selincourt"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url,
        description: 'Personal website for Shaya Selincourt, a software engineer based in Vancouver, BC.',
        site_name: 'Shaya Selincourt - sselin.co',
        images: [],
      }}
      canonical={url}
    />
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
