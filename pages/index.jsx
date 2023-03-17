import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Login from '../components/Login';
import Table from '../components/Table';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// todo

// create a new 'view'
// get all the results for all users
// default view is all results
// add a button to switch to form / your results depending on data

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>techradr | the state of web tech in 2023</title>
        <meta
          name="description"
          content="techradr | the state of web tech in 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.backgroundwall + ` hero min-h-screen`}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-secondary">
                Hello there
              </h1>
              <p className="mb-5 text-primary">
                {`Welcome to techradr. Let's take a look at the state of web tech in 2023...`}
              </p>
              <Login />
            </div>
          </div>
        </div>
        {user !== null && <Table />}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Netlify{' '}
          <span className={styles.logo}>
            <Image
              src="/netlify.svg"
              alt="Netlify Logo"
              width={20}
              height={20}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
