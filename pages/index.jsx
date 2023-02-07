import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Login from '../components/Login';
import Table from '../components/Table';

export default function Home() {
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
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                {`Welcome to techradr. Let's take a look at the state of web tech in 2023...`}
              </p>
              <Login />
            </div>
          </div>
        </div>
        <Table />
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
