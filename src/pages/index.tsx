import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/App.module.css";

function Home() {
    return (
        <>
            <Head>
                <title>Codys Website</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Cody's Personal Website" />
                <meta
                    name="keywords"
                    content="Cody Dilmanian, Cody, Dilmanian, Personal, Website"
                />
                <meta name="author" content="Cody Dilmanian" />
                <link rel="icon" href="/mainicon.png" />
            </Head>
            <div className={styles.App}>
                <h1>Welcome to My Personal Website</h1>
                <p>Please choose from the following options:</p>
                <Link href="/resume">
                    <button className={styles.buttonContainer}>
                        View Resume
                    </button>
                </Link>
                <Link href="/doctoreckersproject">
                    <button className={styles.buttonContainer}>
                        View Doctor Eckers Project
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Home;
