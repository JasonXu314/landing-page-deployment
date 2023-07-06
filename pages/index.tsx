import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { MouseParallax } from 'react-just-parallax';
import { useMediaQuery } from 'usehooks-ts';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const matches = useMediaQuery('(max-width: 900px)');
	const [email, setEmail] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [onClient, setOnClient] = useState<boolean>(false);

	const submitEmail = () => {
		if (
			email
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			axios
				.post('/api/Email', {
					email
				})
				.then((resp) => {
					setEmail('');
					setError(false);
					setSuccess(true);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setError(true);
			setSuccess(false);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setOnClient(true);
		}
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>PickHacks 2024</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="author" content="PickHacks" />
				<meta name="description" content="Welcome site for PickHacks hackathon." />
				<meta name="keywords" content="hackathon,mst,pickhacks" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="PickHacks 2024" />
				<meta
					property="og:description"
					content="Stay in the loop and be the first to know about exciting updates, workshops, and announcements for our upcoming hackathon. Sign up for our mailing list today and join the PickHacks community!"
				/>
				<meta property="og:url" content="https://pickhacks.io" />
				<meta property="og:site_name" content="PickHacks" />
				<meta property="og:image" content="https://pickhacks.io/images/pickhacks.png" />
				<meta name="theme-color" content="#4EB748" />
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
						<form>
							<input type="text" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<button
								className={styles.submit}
								onClick={(e) => {
									e.preventDefault();
									submitEmail();
								}}>
								<IoSendSharp color="#0A4C72" />
							</button>
						</form>
						{success && <p className={styles.success}>Your email has successfully been added!</p>}
						{error && <p className={styles.error}>Your email is invalid. Please try again.</p>}
					</div>
					<div className={styles.socials}>
						<p>Check out our socials</p>
						<div className={styles.buttonContainer}>
							<a className={styles.socialImage} href="https://discord.gg/6PeaMzshkP" target="_blank" rel="noopener noreferrer">
								<div className={styles.discord}></div>
							</a>
							<a className={styles.socialImage} href="https://www.linkedin.com/company/pickhacks/" target="_blank" rel="noopener noreferrer">
								{/* <img src="/images/linkedin.png" width={35} height={33} className={styles.linkedin} alt="logo" /> */}
								<div className={styles.linkedin}></div>
							</a>
							<a className={styles.socialImage} href="https://www.instagram.com/sandtpickhacks/" target="_blank" rel="noopener noreferrer">
								{/* <img src="/images/instagram.png" width={34} height={34} className={styles.instagram} alt="logo" /> */}
								<div className={styles.instagram}></div>
							</a>
						</div>
					</div>
				</div>
				{onClient && !matches && (
					<div
						style={{ width: '40%', height: '100%', overflow: 'visible' }}
						ref={(elem) => {
							if (elem) {
								(elem.children[0] as any).style.overflow = 'visible';
								(elem.children[0].children[0] as any).style.overflow = 'visible';
							}
						}}>
						<MouseParallax strength={0.03} isAbsolutelyPositioned>
							<iframe src="line.svg" height={1125} width={2350} className={styles.svg}></iframe>
						</MouseParallax>
					</div>
				)}
			</main>
		</div>
	);
};
export default Home;

