import { ReactNode } from "react";
import styles from "./ModerateTitle.module.scss";

interface Props {
    children: ReactNode,
    size?: "big" | "small",
}

export default function ModerateTitle({children, size = "big"} : Props) {
    const classNames = `${styles.title} ${size === "small" ? styles.small : ""}`;

    return (
        <h1 className={classNames}>
            {children}
        </h1>
    );
}