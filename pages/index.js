import Head from 'next/head'
import Quiz from '../components/quiz'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MBTI. is. SCIENCE.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Quiz></Quiz>
      </main>

    </div>
  )
}
