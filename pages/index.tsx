import type { NextPage } from 'next'
import Head from 'next/head'
import TitleCard from "../components/home/TitleCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Krzysztof Widacki</title>
        <meta name="description" content="Portoflio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleCard/>


    </div>
  )
}

export default Home
