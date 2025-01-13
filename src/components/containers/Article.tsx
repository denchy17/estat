import styles from "./Article.module.scss";

import { ModerateTitle, ScrollText } from "../textComponents";

interface Props {
    title: string,
    text: string,
    size?: "big" | "small",
}

export default function Article({title, text, size = "big"} : Props) {
    return (
        <div className={styles.article}>
            <ModerateTitle size={size}>{title}</ModerateTitle>
            <ScrollText size={size}>{text}</ScrollText>
        </div>
    );
}