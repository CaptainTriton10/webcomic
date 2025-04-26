import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import Section from "../components/Section.tsx";

async function GetAllChapters() {
    const value = await fetch("http://localhost:3000/chapters/all", {
        mode: "cors",
        method: "GET"
    });

    const chapters = await value.json();

    return chapters;
}

function HomePage() {
    const imgWidth = 3000;
    const imgHeight = 1200;

    const [chapters, setChapters] = useState(["No chapters here."]);

    useEffect(() => {
        GetAllChapters().then((chapters) => {setChapters(Object.keys(chapters))});
    }, []);

    return (
        <div style={{backgroundColor: "black"}}>
            <div>
                <img
                    className={styles.headerImage}
                    src={`https://picsum.photos/${imgWidth}/${imgHeight}`}
                    alt="placeholder"/>
                <h1 className={styles.title}>sample text</h1>
            </div>
            <div className={styles.main}>
                <Section>
                    <h2><b>Chapters</b></h2>
                    {chapters.map((chapter) => (
                        <li key={chapter}>{chapter}</li>
                    ))}
                </Section>
            </div>

        </div>
    );
}

export default HomePage;
