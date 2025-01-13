import { IconImage } from "../imageElements";
import styles from "./ProfileInfo.module.scss";

interface Props {
    picture: string | any,
    name: string,
    nickname: string,
}

export default function ProfileInfo({picture, name, nickname} : Props) {
    return (
        <div className={styles.profileInfo}>
            <IconImage imgLink={picture} width={48} height={48} alt="pic" />
            <div className={styles.textInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.nickname}>{nickname}</div>
            </div>
        </div>
    );
}