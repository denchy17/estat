import { IconImage } from "../imageElements";
import styles from "./AssetInfo.module.scss";

interface Props {
    image: string | any,
    number: number,
    title: string,
}

export default function AssetInfo({image, number, title} : Props) {
    return (
        <div className={styles.assetInfo}>
            <IconImage imgLink={image} width={64} height={64} alt="pic" />
            <div className={styles.textInfo}>
                <p>#{number}</p>
                <h2>{title}</h2>
            </div>
        </div>
    );
}