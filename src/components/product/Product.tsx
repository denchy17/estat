"use client";

import { useState } from "react";
import styles from "./Product.module.scss";

import { Article } from "../containers";
import { IconImage } from "../imageElements";
import ProductOverlay from "./ProductOverlay";

import increaseIcon from "@/../public/increase.png";

interface ProductProps {
  image: string | any;
  title: string;
  description: string;
  increase: number;
  ivestmentPrice: number;
  startingPrice: number;
  plusPrice: number;
  plusExpectations: number;
  expectationsIncrease: number;
}

export default function Product({
  image,
  title,
  description,
  increase,
  ivestmentPrice,
  startingPrice,
  plusPrice,
  plusExpectations,
  expectationsIncrease,
}: ProductProps) {
    const [showOverlay, setShowOverlay] = useState(false);

    const productImageStyle = {
        backgroundImage: `url(${image.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <>
          <div className={styles.product} onClick={toggleOverlay}>
            <div className={styles.productImage} style={productImageStyle} />
            <div className={styles.productProperties}>
              <Article title={title} text={truncatedDescription} size="small" />
              <div className={styles.productNumbers}>
                <div className={styles.increase}>
                  <IconImage alt="increase" width={24} height={24} imgLink={increaseIcon} />
                  +{increase}% Increased
                </div>
                <div className={styles.ivestmentPrice}>${ivestmentPrice}</div>
              </div>
            </div>
          </div>
    
          {showOverlay && (
            <div className={styles.overlayContainer}>
              <div className={styles.overlayBackdrop} onClick={toggleOverlay} />
              <ProductOverlay
                image={image}
                title={title}
                description={description}
                increase={increase}
                ivestmentPrice={ivestmentPrice}
                startingPrice={startingPrice}
                plusPrice={plusPrice}
                plusExpectations={plusExpectations}
                expectationsIncrease={expectationsIncrease}
              />
            </div>
          )}
        </>
      );
}