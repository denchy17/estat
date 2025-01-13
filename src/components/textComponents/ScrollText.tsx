import { ReactNode } from "react";
import styles from "./ScrollText.module.scss";

interface Props {
    children: ReactNode,
    scrollable?: boolean,
    size?: "big" | "small",
}

export default function ScrollText({children, scrollable = false, size = "big"} : Props) {
    const classNames = `
        ${styles.scrollText} 
        ${size === "small" ? styles.small : ""} 
        ${scrollable ? styles.scrollable : ""}
    `.trim();

    return (
        <p className={classNames}>
            {children}
        </p>
    );
}
