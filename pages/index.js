import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeitraum</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>hello</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  )
}
