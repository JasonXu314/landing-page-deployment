import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>PickHacks 2024</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p>Missouri S&T presents...</p>
                <form action="/api/Email">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required />

                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default Home;

