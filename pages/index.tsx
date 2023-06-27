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
            <Image src="/images/pickhacks.png" width={65} height={65} alt="logo" className={styles.logo}/>
            <main className={styles.main}>

                <div className={styles.info}>
                    <div className={styles.textContainer}>
                        <p className={styles.top}>Missouri S&T presents...</p>
                        <p className={styles.title}>PickHacks 2024</p>
                        <p className={styles.bottom}>coming soon...</p>
                    </div>
                    <div>
                        <p className={styles.text}>Interested? Join our mailing list!</p>
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
                    </div>
                    <div className={styles.socials}>
                        <p>Check out our socials</p>
                        <div className={styles.buttonContainer}>
                            <div className={styles.socialImage}>
                                <Image src="/images/discord.png" width={35} height={24} alt="logo"/>
                            </div>
                            <div className={styles.socialImage}>
                                <Image src="/images/linkedin.png" width={35} height={33} alt="logo"/>
                            </div>
                            <div className={styles.socialImage}>
                                <Image src="/images/instagram.png" width={34} height={34} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: "40%", height: "100%"}}>
                    <object type="image/svg+xml" data="line.svg" style={{ position: "absolute", top: 0, right: 0, margin: 0, padding: 0, pointerEvents: 'none', width: "100em", overflow: "hidden"}}></object>
                </div>
            </main>
            
        </div>
    );
};
export default Home;

