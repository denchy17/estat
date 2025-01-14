"use client";

import { useRouter } from "next/navigation";
import styles from "./Punkt.module.scss";
import { NormalImage } from "../imageElements";

interface PunktProps {
  name: string;
  punktImage: string | any;
  link?: string;
}

export default function Punkt({ name, punktImage, link }: PunktProps) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div 
      className={styles.punkt} 
      onClick={handleClick} 
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <NormalImage imgLink={punktImage} alt={name} />
      <p>{name}</p>
    </div>
  );
}
