import styles from "./Money.module.scss";

interface Props {
    money: number,
}

export default function Money({money} : Props) {
    return (
      <div className={styles.money}>
        ${money}
      </div>
    );
}
  