import styles from "./ProductOverlay.module.scss";

import { Article } from "../containers";
import { IconImage } from "../imageElements";

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
  const productImageStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className={styles.productOverlay}>
      <div className={styles.backgroundImage} style={productImageStyle} />
      <div className={styles.productInfo}>
        <Article title={title} text={description} size="small" />
        <div className={styles.profitSection}>
            <div className={styles.expectations}>

            </div>
            <div className={styles.possibleProfit}>
                <p>Possible profit</p>
                <h2>${startingPrice}+</h2>
            </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buyButton}>Invest now <span>${ivestmentPrice}</span></div>
      </div>
    </div>
  );
}