import styles from "./FriendItem.module.scss";

import { IconImage } from "../imageElements";

interface Props {
    logo: string | any,
    reward: number,
    name: string,
    nickname: string,
    medal: string | any,
}

export default function FriendItem({ logo, reward, name, nickname, medal }: Props) {
    const truncatedName = name.length > 14 ? `${name.slice(0, 14)}...` : name;
  
    return (
      <div className={styles.friendItem}>
          <div className={styles.profileInfo}>
              <IconImage imgLink={logo} width={48} height={48} alt="pic" />
              <div className={styles.names}>
                  <h2>{truncatedName}</h2>
                  <p>{nickname}</p>
              </div>
          </div>
          <div className={styles.stonks}>
              <IconImage imgLink={medal} width={32} height={32} alt="pic" />
              <div className={styles.reward}>${reward}</div>
          </div>
      </div>
    );
  }
  
