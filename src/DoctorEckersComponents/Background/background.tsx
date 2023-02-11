import React from "react";
import styles from "./background.module.css";
import { PageContext } from "../Context";
import slideElements from "../Slides/slideElements";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Background = (props: any) => {
    const [page, setPage] = React.useContext(PageContext);

    return (
        <body className={styles.body}>
            <div className={styles.app}>
                <header className={styles.header}>
                    <Link href="/">
                        <BiArrowBack className={styles.backButton} size={30} />
                    </Link>
                    <h1
                        className={styles.title}
                        onClick={() => setPage("SimpleDiagram")}
                    >
                        {/* Civil War Timeline Project */}
                        {page === "SimpleDiagram"
                            ? "Civil War Timeline Project"
                            : slideElements[page - 1].title}
                    </h1>
                </header>
                <main className={styles.main}>{props.children}</main>
                <footer className={styles.footer}>
                    <p>Programmed and Written By Cody and Brayden Dilmanian</p>
                </footer>
            </div>
        </body>
    );
};

export default Background;
