"use client";

import styles from "./Investment.module.scss";

import Header from "@/components/header/Header";
import { Money } from "@/components/particles";
import { GridContainer } from "@/components/containers";

import buildings from "@/../public/buildingPicture.jpeg";

const punkts = [
    {
      name: "Real Estate",
      punktImage: buildings,
      link: "/pages/products/realEstate",
    },
    {
      name: "Real Estate",
      punktImage: buildings,
      link: "/pages/products/realEstate",
    },
    {
      name: "Real Estate",
      punktImage: buildings,
      link: "/pages/products/realEstate",
    },
    {
      name: "Real Estate",
      punktImage: buildings,
      link: "/pages/products/realEstate",
    },
];

export default function Investment() {
    return (
      <div className={styles.investment}>
        <Header article="RWA Markets" />
        <Money money={300} />
        <GridContainer punkts={punkts} />
      </div>
    );
}