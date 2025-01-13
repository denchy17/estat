"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./NavItem.module.scss";
import { IconImage } from "../imageElements";

interface Props {
  activeIcon: string | any;
  inactiveIcon: string | any;
  name: string;
  link: string;
}

export default function NavItem({ activeIcon, inactiveIcon, name, link }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === link;

  const handleNavigation = () => {
    router.push(link);
  };

  return (
    <div
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
      onClick={handleNavigation}
    >
      <IconImage
        imgLink={isActive ? activeIcon : inactiveIcon}
        width={24}
        height={24}
        alt={`${name} icon`}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
