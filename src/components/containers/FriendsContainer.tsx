import styles from "./FriendsContainer.module.scss";

import { IconImage } from "../imageElements";

import inviteIcon from "@/../public/friendIcon.png";
import FriendItem from "../friendItem/FriendItem";

interface FriendItem {
  logo: string | any,
  reward: number,
  name: string,
  nickname: string,
  medal: string | any,
}

interface Props {
  items: FriendItem[];
}

export default function FriendsContainer({ items }: Props) {
  return (
    <div className={styles.friendsContainer}>
      <div className={styles.inviteBlock}>
        <div className={styles.block}>
            <h2>$1000 Bonus!</h2>
            <p>Invite your friend and both of you get <span>$1000</span> bonus.</p>
            <div className={styles.button}>
                <p>Invite Now</p>
                <IconImage imgLink={inviteIcon} width={24} height={24} alt="icon" />
            </div>
        </div>
        <div className={styles.block}>
            <h2>$2000 Bonus!</h2>
            <p>Invite your friend who has <span>Telegram Premium</span> and both of you get <span>$2000</span> bonus.</p>
            <div className={styles.button}>
                <p>Invite Now</p>
                <IconImage imgLink={inviteIcon} width={24} height={24} alt="icon" />
            </div>
        </div>
      </div>
      <div className={styles.container}>
        <h4>List of Friends</h4>
        {items.map((item, index) => (
            <FriendItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
