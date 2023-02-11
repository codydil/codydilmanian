import React from "react";
import slideElements from "./slideElements";
import images from "../../../public/doctorEckersImages/images";
import styles from "./Slide.module.css";
import { PageContext } from "../Context";
import Image from "next/image";

function Slide() {
    const [page, setPage] = React.useContext(PageContext);
    const { paragraph } = slideElements.slice(page - 1, page)[0];

    return (
        <>
            <div className={styles.container}>
                <Image src={images[page - 1]} alt="" className={styles.image} />

                <p className={styles.paragraph}>
                    {paragraph}
                    <br />
                    {page === 1 ? null : (
                        <div
                            className={styles.button}
                            onClick={() => setPage(page - 1)}
                        >
                            Previous Page
                        </div>
                    )}
                    <div
                        className={styles.button}
                        onClick={() => setPage("SimpleDiagram")}
                    >
                        Timeline
                    </div>
                    {page === 10 ? null : (
                        <div
                            className={styles.button}
                            onClick={() => setPage(page + 1)}
                        >
                            Next Page
                        </div>
                    )}
                </p>
            </div>
        </>
    );
}

export default Slide;
