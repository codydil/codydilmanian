import React from "react";
import Background from "../DoctorEckersComponents/Background/background";
import Timeline from "../DoctorEckersComponents/Timeline/Timeline";
import { PageContext } from "../DoctorEckersComponents/Context";
import Slide from "../DoctorEckersComponents/Slides/Slide";
import Head from "next/head";

export default function App() {
    const [page, setPage] = React.useState("SimpleDiagram");

    const pageDisplay = () => {
        switch (page) {
            case "SimpleDiagram":
                return <Timeline />;
            default:
                return <Slide />;
        }
    };

    return (
        <>
            <PageContext.Provider value={[page, setPage]}>
                <Background>
                    <Head>
                        <title>Civil War Timeline Project</title>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta name="theme-color" content="#000000" />
                        <meta
                            name="description"
                            content="Cody's Civil War Timeline Project"
                        />
                        <meta
                            name="keywords"
                            content="Cody Dilmanian, Cody, Dilmanian, Civil War, Timeline, Project"
                        />
                        <meta name="author" content="Cody Dilmanian" />
                        <link
                            rel="icon"
                            href="/doctorEckersImages/doctoreckersicon.png"
                        />
                    </Head>
                    {pageDisplay()}
                </Background>
            </PageContext.Provider>
        </>
    );
}
