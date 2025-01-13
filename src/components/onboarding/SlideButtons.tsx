import styles from "./SlideButtons.module.scss";

import { IconImage } from "../imageElements";

import arrow from "@/../public/arrowRight.svg";

interface Props {
  status?: boolean;
  onNext: () => void;
  onSkip: () => void;
}

export default function SlideButtons({ status = false, onNext, onSkip }: Props) {
  return (
    <div className={styles.slideButtons}>
      {status ? (
        <button className={styles.lastButton} onClick={onSkip}>
          Let’s get started
          <IconImage imgLink={arrow} width={16} height={10} alt="arrow" />
        </button>
      ) : (
        <>
          <button onClick={onSkip}>Skip</button>
          <button onClick={onNext}>
            Next
            <IconImage imgLink={arrow} width={24} height={24} alt="arrow" />
          </button>
        </>
      )}
    </div>
  );
}
