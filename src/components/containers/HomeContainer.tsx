import { ReactNode } from "react";
import styles from "./HomeContainer.module.scss";

interface Props {
    children: ReactNode;
}

export default function HomeContainer({children} : Props) {
    return (
        <div className={styles.homeContainer}>
            {children}
        </div>
    );
}