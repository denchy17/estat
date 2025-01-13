import styles from "./PortfolioComponent.module.scss";

interface Props {
    value: number,
    balance: number,
    plusValue: number,
    plusPracentage: number,
}

export default function PortfolioComponent({value, balance, plusValue, plusPracentage} : Props) {
    return (
        <div className={styles.portfolioComponent}>
            <div className={styles.value}>

            </div>
            <div className={styles.balance}>

            </div>
        </div>
    );
}