
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { authorizeAPI, refreshAPI, fetchYahooData } from '../utils/yahooApi.js'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={fetchYahooData}> Make api call</button>
      </main>
    </div>
  );
}
