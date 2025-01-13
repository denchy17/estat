import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./UpperSlide.module.scss";

import { NormalImage } from "../imageElements";

interface Props {
    image: string | StaticImport,
    color: "lila" | "salad-green" | "yellow" | string,
}

export default function UpperSlide({ image, color }: Props) {
    return (
        <div className={`${styles.upperSlide} ${styles[color]}`}>
            <NormalImage imgLink={image} alt="pic" />
        </div>
    );
}