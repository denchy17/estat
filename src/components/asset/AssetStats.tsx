import styles from "./AssetStats.module.scss";

interface Props {
    value: number,
    plusValue: number,
    plusPercentage: number,
    dividend: number,
    plusDividend: number,
    dividendDays: number,
}

export default function AssetStats({value, plusValue, plusPercentage, dividend, plusDividend, dividendDays} : Props) {
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat().format(num);
    };

    return (
        <div className={styles.assetStats}>
            <div className={styles.value}>
                <div className={styles.mainNumbers}>
                    <p>Current value</p>
                    <h2>${formatNumber(value)}</h2>
                </div>
                <div className={styles.percentage}>
                    <p>+{formatNumber(plusValue)}$</p>
                    <span />
                    <p>+{formatNumber(plusPercentage)}%</p>
                </div>
            </div>
            <div className={styles.dividend}>
                <div className={styles.mainNumbers}>
                    <p>Dividend</p>
                    <h2>${dividend}</h2>
                </div>
                <div className={styles.percentage}>
                    <p>+{formatNumber(plusDividend)}$</p>
                    <span />
                    <p>{dividendDays}D ago</p>
                </div>
            </div>
        </div>
    );
}