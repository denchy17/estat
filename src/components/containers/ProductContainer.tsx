import styles from "./ProductContainer.module.scss";

import Product from "../product/Product";

interface ProductItem {
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

interface Props {
  items: ProductItem[];
}

export default function ProductContainer({ items }: Props) {
  return (
    <div className={styles.productContainer}>
      {items.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}
