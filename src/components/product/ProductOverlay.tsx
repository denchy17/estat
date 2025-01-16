import React, { useState } from "react";
import styles from "./ProductOverlay.module.scss";

import { Article } from "../containers";
import { IconImage } from "../imageElements";

import circle from "@/../public/circle.png";
import backButton from "@/../public/whiteBackButton.png";

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

export default function ProductOverlay({
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
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  const handleBackButtonClick = () => {
    setOverlayVisible(false);
  };

  const productImageStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  if (!isOverlayVisible) return null;

  return (
    <div className={styles.productOverlay}>
      <div className={styles.backgroundImage} style={productImageStyle} />
      <div className={styles.productInfo}>
        <Article title={title} text={description} size="small" />
        <div className={styles.profitSection}>
          <div className={styles.expectations}>
            <div className={styles.point}>
              <IconImage imgLink={circle} width={32} height={32} alt="circle" />
              <div className={styles.pointText}>
                <p>Starting price</p>
                <div className={styles.profitInfo}>
                  <p>${startingPrice}</p>
                  <span />
                  <p>{increase}% Increased</p>
                </div>
              </div>
            </div>
            <div className={styles.point}>
              <IconImage imgLink={circle} width={32} height={32} alt="circle" />
              <div className={styles.pointText}>
                <p>Expecting price increase</p>
                <div className={styles.profitInfo}>
                    <p>${plusExpectations}+</p>
                    <span />
                    <p>{expectationsIncrease}% Increased</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.possibleProfit}>
            <p>Possible profit</p>
            <h2>${startingPrice}+</h2>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buyButton}>
          Invest now <span>${ivestmentPrice}</span>
        </div>
      </div>

      <div className={styles.customHeader}>
        <div className={styles.backButton} onClick={handleBackButtonClick}>
          <IconImage imgLink={backButton} width={12} height={24} alt="back" />
        </div>
        <div className={styles.headerTitle}>{title}</div>
        <div className={styles.money}>$300</div>
      </div>
    </div>
  );
}
