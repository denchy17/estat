import { ReactNode } from "react";
import styles from "./Section.module.scss";

interface Props {
    children: ReactNode,
    title: string,
}

export default function Section({children, title} : Props) {
    return (
        <div className={styles.section}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    );
}