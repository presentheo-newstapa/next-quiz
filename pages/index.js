import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import User from '../components/user';
import Quiz from '../components/quiz';
import Result from '../components/result';

export default function Home(props) {

  const [user, setUser] = useState({
    state: null,
    name: null,
    job: null    
  });

  return (
    <div>
      <Head>
        <title>MBTI. is. SCIENCE.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>

        </div>
        <User></User>
        <Quiz></Quiz>
        <Result></Result>
      </main>

    </div>
  )
}
