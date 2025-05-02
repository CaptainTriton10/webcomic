import styles from "./Section.module.css";
import {PropsWithChildren} from "react";

function Section({children}: PropsWithChildren) {
    return (
        <div className={styles.section}>{children}</div>
    );
}

export default Section;