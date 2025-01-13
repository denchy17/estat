import styles from "./AchivmentInfo.module.scss";

interface Props {
    currentAchivement: string,
    progress: number,
}

export default function AchivmentInfo({progress} : Props) {
    return (
        <div className={styles.achivmentInfo}>
            
        </div>
    );
}