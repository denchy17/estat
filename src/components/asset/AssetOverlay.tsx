import styles from "./AssetOverlay.module.scss";

import { IconImage } from "../imageElements";

import arrow from "@/../public/blackArrow.png";
import close from "@/../public/close.png";

interface Props {
    image: string | any,
    number: number,
    title: string,
    marketValue: string,
    increase: number,
    totalEarning: number,
    plusValue?: number,
    plusPercentage?: number,
    dividend?: number,
    plusDividend?: number,
    dividendDays?: number,
    onClose: () => void;
}

export default function AssetOverlay({
    image, number, title, marketValue, increase, totalEarning,
    plusValue = 0, plusPercentage = 0, dividend = 0, plusDividend = 0, dividendDays = 0, onClose
}: Props) {
    const formatNumber = (num: number) => {
        return new Intl.NumberFormat().format(num);
    };

    const backgroundStyle = {
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className={styles.assetOverlay}>
            <div className={styles.overlayContent}>
                <div className={styles.closeButton} onClick={onClose}>
                    <IconImage imgLink={close} alt="close" width={7.5} height={7.5} />
                </div>
                <div className={styles.title}>Asset #{number}</div>
                <div className={styles.imgBackground} style={backgroundStyle} />
                <div className={styles.assetInfo}>
                    <div className={styles.propertyTitle}>{title}</div>
                    <div className={styles.propertyLink}>
                        See more about this property
                        <IconImage imgLink={arrow} alt="arrow" width={24} height={24} />
                    </div>
                    <div className={styles.assetStats}>
                        <div className={styles.stat}>
                            <div className={styles.mainNumbers}>
                                <p>Market value</p>
                                <h2>{marketValue}</h2>
                            </div>
                            <div className={styles.percentage}>
                                <p>+{formatNumber(plusValue)}$</p>
                                <span />
                                <p>+{formatNumber(plusPercentage)}%</p>
                            </div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.mainNumbers}>
                                <p>Earned from rental dividends</p>
                                <h2>${dividend}</h2>
                            </div>
                            <div className={styles.percentageContainer}>
                                <div className={styles.percentage}>
                                    <p>+{formatNumber(plusDividend)}$</p>
                                    <span />
                                    <p>{dividendDays}D ago</p>
                                </div>
                                <div className={styles.percentage}>
                                    <p>+{formatNumber(increase)}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.totalEarning}>
                    <p>Total earning</p>
                    <h2>${totalEarning}</h2>
                </div>
            </div>
        </div>
    );
}
