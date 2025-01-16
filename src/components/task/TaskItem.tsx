import styles from "./TaskItem.module.scss";

import { IconImage } from "../imageElements";

import backButton from "@/../public/whiteBackButton.png";

interface Props {
  logo: string | any,
  reward: number,
  link?: string,
  taskTitle: string,
  taskText?: string,
}

export default function TaskItem({ logo, reward, link, taskTitle, taskText }: Props) {
  return (
    <div className={styles.taskItem}>
        <div className={styles.firstBlock}>
            <div className={styles.icon}>
                <IconImage imgLink={logo} width={48} height={48} alt="logo" />
            </div>
            <div className={styles.reward}>+${reward}</div>
        </div>
        <div className={styles.text}>
            {taskTitle}
        </div>
        <div className={styles.button}>
            <p>Complete now</p>
            <IconImage imgLink={backButton} width={12} height={24} alt="icon" />
        </div>
    </div>
  );
}
