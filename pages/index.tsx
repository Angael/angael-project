import type { NextPage } from 'next';
import Head from 'next/head';
import IndexTitleCard from '../components/home/IndexTitleCard';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Krzysztof Widacki</title>
                <meta name='description' content='Portoflio page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <IndexTitleCard />
        </div>
    );
};

export default Home;
