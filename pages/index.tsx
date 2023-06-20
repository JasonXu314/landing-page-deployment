import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>PickHacks 2024</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p>Missouri S&T presents...ඞ</p>
            <object type="image/svg+xml" data="line.svg" style={{position: "absolute", top: 0, right: 0, height: "100%", width: "110%", margin: 0, padding: 0}}></object>
            </main>
        </div>
    );
};

export default Home;

