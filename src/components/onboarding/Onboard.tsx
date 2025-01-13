"use client";

import { useState } from "react";
import styles from "./Onboard.module.scss";

import Slide from "./Slide";
import UpperSlide from "./UpperSlide";
import BottomSlide from "./BottomSlide";

import onboardOne from "@/../public/onboardOne.png";

const slidesData = [
  {
    title: "Invest in tokenised assets!",
    text: "Become an investor and manage stakes in real assets in one click: real estate, startups, art, infrastructure and more...",
    color: "lila"
  },
  {
    title: "Track Your Portfolio",
    text: "Stay updated with your portfolio performance and receive timely insights on your investments.",
    color: "yellow"
  },
  {
    title: "Join a Global Community",
    text: "Connect with like-minded investors and grow your knowledge in tokenised assets.",
    color: "lila"
  }
];

export default function Onboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handleSkipOrFinish = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className={styles.onboard}>
        <div className={styles.statusBar}>
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`${styles.status} ${
                index <= currentSlide ? styles.active : styles.inactive
              }`}
            ></span>
          ))}
        </div>
        <Slide>
          <UpperSlide
            image={onboardOne}
            color={slidesData[currentSlide].color}
          />
          <BottomSlide
            title={slidesData[currentSlide].title}
            text={slidesData[currentSlide].text}
            prograssion={currentSlide === slidesData.length - 1}
            onNext={handleNext}
            onSkip={handleSkipOrFinish}
          />
        </Slide>
      </div>
    )
  );
}
