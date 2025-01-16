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

  const backgroundStyle = {
    backgroundImage: `url(${punktImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div 
      className={styles.punkt} 
      onClick={handleClick} 
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <div className={styles.imageBlock} style={backgroundStyle} />
      <p>{name}</p>
    </div>
  );
}
