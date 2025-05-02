import { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "./HomePage.module.css";
import Section from "../components/Section.tsx";

async function GetAllChapters() {
    const value = await fetch("/api/chapters/all", {
        method: "GET"
    });

    const chapters = await value.json();

    return chapters;
}

function HomePage() {
    const imgWidth = 3000;
    const imgHeight = 1200;

    const [chapters, setChapters] = useState([404]);

    useEffect(() => {
        GetAllChapters().then((chapters) => {
            const readableChapters = chapters.keys().map((chapter: number) => chapter + 1);
            setChapters(readableChapters);
        });
    }, []);

    return (
        <div style={{ backgroundColor: "black" }}>
            <div>
                <img
                    className={styles.headerImage}
                    src={`https://picsum.photos/${imgWidth}/${imgHeight}`}
                    alt="placeholder" />
                <h1 className={styles.title}>sample text</h1>
            </div>
            <div className={styles.main}>
                <Section>
                    <h2 className={styles.title2}><b>Chapters</b></h2>
                    <div className={styles.chapters}>
                        {chapters.map((chapter) => (
                            <Link className={styles.chapter} to={`/chapter/${chapter}`}>Chapter {chapter}</Link>
                        ))}
                    </div>
                </Section>
            </div>

        </div>
    );
}

export default HomePage;