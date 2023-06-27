import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import { useMediaQuery } from 'usehooks-ts';
import { IoSendSharp } from 'react-icons/io5';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

const Home: NextPage = () => {
	const matches = useMediaQuery('(min-width: 950px)');

	return (
		<div className={styles.container}>
			<Head>
				<title>PickHacks 2024</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<img src="/images/pickhacks.png" alt="logo" className={styles.logo} />

			<main className={styles.main}>
				<div className={styles.info}>
					<div className={styles.textContainer}>
						<p className={styles.top}>Missouri S&T presents...</p>
						<p className={styles.title}>PickHacks 2024</p>
						<p className={styles.bottom}>coming soon...</p>
					</div>
					<div className={styles.mailing}>
						<p className={styles.text}>Interested? Join our mailing list!</p>
						<form action="/api/Email">
							<input
								type="text"
								placeholder="Enter email address"
								id="email"
								name="email"
								pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
								title="please submit a valid email address"
								required
							/>
							<button className={styles.submit}>
								<IoSendSharp color="#0A4C72" />
							</button>
						</form>
					</div>
					<div className={styles.socials}>
						<p>Check out our socials</p>
						<div className={styles.buttonContainer}>
							<a className={styles.socialImage} href="https://discord.gg/6PeaMzshkP" target="_blank" rel="noopener noreferrer">
								<img src="/images/discord.png" className={styles.discord} alt="logo" />
							</a>
							<a className={styles.socialImage} href="https://www.linkedin.com/company/pickhacks/" target="_blank" rel="noopener noreferrer">
								<img src="/images/linkedin.png" width={35} height={33} className={styles.linkedin} alt="logo" />
							</a>
							<a className={styles.socialImage} href="https://www.instagram.com/sandtpickhacks/" target="_blank" rel="noopener noreferrer">
								<img src="/images/instagram.png" width={34} height={34} className={styles.instagram} alt="logo" />
							</a>
						</div>
					</div>
				</div>
				{matches && (
					<div style={{ width: '40%', height: '100%' }}>
						<MouseParallax
                            strength={.01}
                            isAbsolutelyPositioned
                        >
							<object
								type="image/svg+xml"
								data="line.svg"
								className={styles.svg}
							></object>
						</MouseParallax>
					</div>
				)}
			</main>
		</div>
	);
};
export default Home;
