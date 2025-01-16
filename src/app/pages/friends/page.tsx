import styles from "./Friend.module.scss";

import { TopBackground } from "@/components/particles";
import { FriendsContainer } from "@/components/containers";

import friendIcon from "@/../public/friendIcon.png";
import logo from "@/../public/profilePic.jpeg";
import medal from "@/../public/medal.png";

const friendsList = [
  {
    logo: logo,
    reward: 1000,
    name: "Emily Johnson",
    nickname: "@Elizabeth29",
    medal: medal,
  },
  {
    logo: logo,
    reward: 1000,
    name: "Emily Johnson",
    nickname: "@Elizabeth29",
    medal: medal,
  },
];

export default function Friend() {
  return (
    <div className={styles.friend}>
      <TopBackground icon={friendIcon} title="Invite Your Friends!" text="Each of you receive bonuses!" />
      <FriendsContainer items={friendsList} />
    </div>
  );
}
