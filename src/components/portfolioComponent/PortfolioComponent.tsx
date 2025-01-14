import styles from "./PortfolioComponent.module.scss";

import background from "@/../public/background.jpeg";

interface Props {
    value: number,
    balance: number,
    plusValue: number,
    plusPracentage: number,
}

export default function PortfolioComponent({value, balance, plusValue, plusPracentage} : Props) {
    const portfolioStyle = {
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat().format(num);
    };

    return (
        <div className={styles.portfolioComponent} style={portfolioStyle}>
            <div className={styles.value}>
                <div className={styles.mainNumbers}>
                    <p>Total asset value</p>
                    <h2>${formatNumber(value)}</h2>
                </div>
                <div className={styles.percentageContainer}>
                    <div className={styles.percentage}>
                        <p>+{formatNumber(plusValue)}$</p>
                        <span />
                        <p>+{formatNumber(plusPracentage)}%</p>
                    </div>
                </div>
            </div>
            <div className={styles.mainNumbers}>
                <p>Available balance</p>
                <h2>${formatNumber(balance)}</h2>
            </div>
        </div>
    );
}