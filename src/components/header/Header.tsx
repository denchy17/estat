"use client";

import { useRouter } from "next/navigation";

import { IconImage } from "../imageElements";
import styles from "./Header.module.scss";
import backButton from "@/../public/backButton.png" 

interface Props {
  article: string;
  notPrimary?: boolean;
  linkBack?: string;
}

export default function Header({ article, notPrimary = false, linkBack } : Props) {
  const router = useRouter();

  const handleBackClick = () => {
    if (linkBack) {
      router.push(linkBack);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.header}>
      {notPrimary && (
        <div className={styles.iconWrapper} onClick={handleBackClick} style={{ cursor: "pointer" }}>
          <IconImage imgLink={backButton} width={6} height={12} alt="Back" />
        </div>
      )}
      <span className={styles.article}>{article}</span>
    </div>
  );
}