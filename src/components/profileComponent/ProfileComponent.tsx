import styles from "./ProfileComponent.module.scss";
import ProfileInfo from "./ProfileInfo";

interface Props {
    picture: string | any,
    name: string,
    nickname: string,
    currentAchivement: string,
    progress: number,
}

export default function ProfileComponent({picture, name, nickname, progress} : Props) {
    return (
        <div className={styles.profileComponent}>
            <ProfileInfo picture={picture} name={name} nickname={nickname} />
        </div>
    );
}