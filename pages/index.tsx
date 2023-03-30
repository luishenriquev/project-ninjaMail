import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Head from 'next/head'
import Header from './components/Header';
import logoTitle from '../public/NinjaMail.png';

const Home: NextPage = () => {
  return (
    <div className={styles.main} >
      <Head>
        <title>NinjaMail</title>
        <link rel="shortcut icon" href="/static/NinjaMailLogo.png" />
      </Head>
      <Header></Header>
      <Body />
      <Footer />
    </div>
  )
}

export default Home
