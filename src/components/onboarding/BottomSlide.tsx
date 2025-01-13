import styles from "./BottomSlide.module.scss";

import { Article } from "../containers";
import SlideButtons from "./SlideButtons";

interface Props {
    title: string,
    text: string,
    prograssion?: boolean,
    onNext: () => void,
    onSkip: () => void,
}

export default function BottomSlide({ title, text, prograssion = false, onNext, onSkip }: Props) {
    return (
        <div className={styles.bottomSlide}>
            <Article title={title} text={text} />
            <SlideButtons status={prograssion} onNext={onNext} onSkip={onSkip} />
        </div>
    );
}
