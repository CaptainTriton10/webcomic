import Section from "./Section";
import styles from "./Comic.module.css"

interface propTypes {
    src: string,
    alt: string
}

function Comic(props: propTypes) {
    return (
        <Section>
            <img className={styles.comic}
                 src={props.src}
                 alt={props.alt}/>
        </Section>
    )
}

export default Comic;