import { ReactNode } from "react";
import styles from "./Slide.module.scss";

interface Props {
    children: ReactNode,
}

export default function Slide({ children }: Props) {
    return (
        <div className={styles.slide}>
            {children}
        </div>
    );
}