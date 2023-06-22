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
                    <input
                        type="text"
                        id="email"
                        name="email"
                        pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                        title="please submit a valid email address"
                        required />

                    <button type="submit">Submit</button>
                </form>
              <object type="image/svg+xml" data="line.svg" style={{position: "absolute", top: 0, right: 0, height: "100%", width: "110%", margin: 0, padding: 0}}></object>
            </main>
        </div>
    );
};

export default Home;

