import Head from 'next/head'
import Quiz from '../components/quiz'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Quiz></Quiz>
      </main>

    </div>
  )
}
