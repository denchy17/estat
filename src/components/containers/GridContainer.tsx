import styles from "./GridContainer.module.scss";

import Punkt from "../punkt/Punkt";

interface Punkt {
    name: string;
    punktImage: string | any;
    link: string,
}

interface Props {
    punkts: Punkt[];
}

export default function GridContainer({ punkts }: Props) {
    return (
        <div className={styles.gridContainer}>
            {punkts.map((punkt, index) => (
                <Punkt key={index} name={punkt.name} punktImage={punkt.punktImage} link={punkt.link} />
            ))}
        </div>
    );
}
