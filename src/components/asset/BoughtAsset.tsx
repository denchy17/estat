"use client";

import { useState } from "react";
import styles from "./BoughtAsset.module.scss";

import AssetInfo from "./AssetsInfo";
import AssetStats from "./AssetStats";
import AssetOverlay from "./AssetOverlay";

interface Props {
    image: string | any,
    number: number,
    title: string,
    value: number,
    plusValue: number,
    plusPercentage: number,
    dividend: number,
    plusDividend: number,
    dividendDays: number,
    marketValue: string,
    increase: number,
    totalEarning: number,
}

export default function BoughtAsset({
    image, number, title, value, plusValue, plusPercentage,
    dividend, plusDividend, dividendDays, marketValue, increase, totalEarning
} : Props) {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOverlayToggle = () => {
        setShowOverlay(!showOverlay);
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
    };

    return (
        <div className={styles.boughtAsset} onClick={handleOverlayToggle}>
            <AssetInfo image={image} number={number} title={title} />
            <AssetStats
                value={value}
                plusValue={plusValue}
                plusPercentage={plusPercentage}
                dividend={dividend}
                plusDividend={plusDividend}
                dividendDays={dividendDays}
            />
            {showOverlay && (
                <div>
                    <AssetOverlay
                        image={image}
                        number={number}
                        title={title}
                        marketValue={marketValue}
                        increase={increase}
                        totalEarning={totalEarning}
                        plusDividend={plusDividend}
                        plusPercentage={plusPercentage}
                        plusValue={plusValue}
                        dividend={dividend}
                        dividendDays={dividendDays}
                        onClose={handleOverlayClose}
                    />
                </div>
            )}
        </div>
    );
}
