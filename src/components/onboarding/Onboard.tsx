"use client";

import { useState, useEffect } from "react";
import styles from "./Onboard.module.scss";

import Slide from "./Slide";
import UpperSlide from "./UpperSlide";
import BottomSlide from "./BottomSlide";

import onboardOne from "@/../public/onboardOne.png";
import onboardTwo from "@/../public/onboardTwo.png";
import onboardThree from "@/../public/onboardThree.png";

const slidesData = [
  {
    title: "Invest in tokenised assets!",
    text: "Become an investor and manage stakes in real assets in one click: real estate, startups, art, infrastructure and more...",
    color: "lila",
    image: onboardOne,
  },
  {
    title: "What is tokenisation?",
    text: "Tokenisation is the process of dividing any asset into digital shares (tokens) that can be bought, sold or stored",
    color: "salad-green",
    image: onboardTwo,
  },
  {
    title: "What is tokenisation?",
    text: "Tokenisation is the process of dividing any asset into digital shares (tokens) that can be bought, sold or stored",
    color: "yellow",
    image: onboardThree,
  },
];

export default function Onboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("hasCompletedOnboarding");
    if (!hasCompletedOnboarding) {
      setVisible(true);
    }
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handleSkipOrFinish = () => {
    setVisible(false);
    localStorage.setItem("hasCompletedOnboarding", "true");
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
            image={slidesData[currentSlide].image}
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
