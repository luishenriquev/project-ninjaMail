import type { NextPage } from 'next';
import Body from './components/Body';
import Footer from './components/Footer';
// import Head from 'next/head'
import Head from './components/Head';

const Home: NextPage = () => {
  return (
    <div>
     <Head></Head>
     <Body />
     <Footer />
    </div>
  )
}

export default Home
