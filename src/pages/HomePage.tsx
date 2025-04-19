import styles from "./HomePage.module.css";
import Section from "../components/Section.tsx";

function HomePage() {
    const imgWidth = 3000;
    const imgHeight = 1200;

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
                <Section></Section>
                <Section></Section>
            </div>

        </div>
    );
}

export default HomePage;