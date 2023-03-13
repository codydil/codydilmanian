import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/resume.module.css";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Head from "next/head";

export default function App() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the desired URL
        router.push("/resume.pdf");
    }, []);
    return (
        <>
            <Head>
                <title>Codys Resume</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Cody's Resume" />
                <meta
                    name="keywords"
                    content="Cody Dilmanian, Cody, Dilmanian, Resume, Software, Engineer"
                />
                <meta name="author" content="Cody Dilmanian" />
                {/* set icon */}
                <link rel="icon" href="/mainPage/profile.jpeg" />
            </Head>
        </>
    );
}

{
    /* <div className={styles.App}>
    <header className={styles.AppHeader}>
        <Link href="/">
            <BiArrowBack size={30} className={styles.BackArrow} />
        </Link>
        <h1 className={styles.TitleLink}>
            <Link
                href="https://docs.google.com/document/d/1ANovpjlqpdF11Lole5T2QOr0z7xkI85zmjig2HDhoH0/edit?usp=sharing"
                target="_blank"
            >
                My Resume
            </Link>
        </h1>
    </header>
    <main>
        <div className={styles.ResumeContainer}>
            <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSjOcErEzq5yz0-Gq8w4rOWXTRTvzeB77l3uJeBYuuJM5DOzGUOgMEpMftmbRgAVahf2omM_CV1mCAL/pub?embedded=true"
                className={styles.Frame}
                // width="1000px"
                // height="800px"
            />
        </div>
    </main>
</div>; */
}
