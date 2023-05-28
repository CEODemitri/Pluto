import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pluto Land</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
  
//   header is going here
        <div className={styles.description}>
          <div className="navbar">
//             Logo ... navigation links    
          </div>
          <h1 className="title">Pluto Land</h1>
          <p>
            How far have you traveled?<br/>
            Miles or lifetimes?
          </p>
          <img />
        </div>

// main section to be placed here
        <div>
          
        </div>

// footer of course is going here
        <div>
          
        </div>
      </main>
    </>
  )
}
