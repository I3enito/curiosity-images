import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to curious.image!</h1>

                <div className={styles.grid}>
                    <a href="/moodboard" className={styles.card}>
                        <h3>Moodboard &rarr;</h3>
                        <p>Watch our work-in-progress-moodboard!</p>
                    </a>

                    <a href="/about" className={styles.card}>
                        <h3>About &rarr;</h3>
                        <p>Discover the project ideas and the team!</p>
                    </a>
                </div>
            </main>
        </div>
    );
}
