import styles from "./Product.module.scss";

import { Article } from "../containers";

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
  const productImageStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const truncatedDescription =
    description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className={styles.product}>
      <div className={styles.productImage} style={productImageStyle} />
      <div className={styles.productProperties}>
        <Article title={title} text={truncatedDescription} size="small" />
            <div className={styles.productNumbers}>
                <div className={styles.increase}>

                </div>
                <div className={styles.ivestmentPrice}>
                    ${ivestmentPrice}
                </div>
            </div>
      </div>
    </div>
  );
}