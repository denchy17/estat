"use client";

import styles from "./NavBar.module.scss";
import NavItem from "./NavItem";

import activeHome from "@/../public/activeHome.png";
import inactiveHome from "@/../public/inactiveHome.png";
import activeInvest from "@/../public/activeInvest.png";
import inactiveInvest from "@/../public/inactiveInvest.png";
import activeTask from "@/../public/activeTask.png";
import inactiveTask from "@/../public/inactiveTask.png";
import activeFriends from "@/../public/activeFriends.png";
import inactiveFriends from "@/../public/inactiveFriends.png";

const navigation = [
  {
    activeIcon: activeHome,
    inactiveIcon: inactiveHome,
    name: "Home",
    link: "/",
  },
  {
    activeIcon: activeInvest,
    inactiveIcon: inactiveInvest,
    name: "Investment",
    link: "/pages/investment",
  },
  {
    activeIcon: activeTask,
    inactiveIcon: inactiveTask,
    name: "Tasks",
    link: "/pages/tasks",
  },
  {
    activeIcon: activeFriends,
    inactiveIcon: inactiveFriends,
    name: "Friends",
    link: "/pages/friends",
  },
];

interface Props {}

export default function NavBar({}: Props) {
  return (
    <div className={styles.navBar}>
      {navigation.map((item, index) => (
        <NavItem
          key={index}
          activeIcon={item.activeIcon}
          inactiveIcon={item.inactiveIcon}
          name={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
}
