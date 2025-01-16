import styles from "./TopBackground.module.scss";

import { IconImage } from "../imageElements";

interface Props {
    icon: string | any,
    title: string,
    text: string,
}

export default function TopBackground({ icon, title, text }: Props) {
  return (
    <div className={styles.topBackground}>
        <div className={styles.gradient}>
            <div className={styles.info}>
                <IconImage imgLink={icon} alt="icon" width={32} height={32} />
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
