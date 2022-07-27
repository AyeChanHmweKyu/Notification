import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Notifications from './notifications'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Test</title>
      </Head>
      <Notifications />
    </div>
  )
}
