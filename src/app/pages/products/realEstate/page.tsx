"use client";

import styles from "./RealEstate.module.scss";

import Header from "@/components/header/Header";
import { Money } from "@/components/particles";
import { ProductContainer } from "@/components/containers";

import buildings from "@/../public/buildingPicture.jpeg";

const products = [
  {
    image: buildings,
    title: "Property title",
    description:
      "Check out The Skyline Tower, an awesome 30-story apartment building right in the middle of The Bronx. You’ll love the amazing views of the city skyline from here! The place has roomy one, two, and three-bedroom apartments, plus some great amenities like a rooftop terrace, a gym, and a concierge available 24/7. Dive into the lively culture and convenience of New York City, all just steps away!",
    increase: 100,
    ivestmentPrice: 4000,
    startingPrice: 3600,
    plusPrice: 400,
    plusExpectations: 600,
    expectationsIncrease: 20.11,
  },
  {
    image: buildings,
    title: "Property title",
    description:
      "Check out The Skyline Tower, an awesome 30-story apartment building right in the middle of The Bronx. You’ll love the amazing views of the city skyline from here! The place has roomy one, two, and three-bedroom apartments, plus some great amenities like a rooftop terrace, a gym, and a concierge available 24/7. Dive into the lively culture and convenience of New York City, all just steps away!",
    increase: 100,
    ivestmentPrice: 4000,
    startingPrice: 3600,
    plusPrice: 400,
    plusExpectations: 600,
    expectationsIncrease: 20.11,
  },
  {
    image: buildings,
    title: "Property title",
    description:
      "Check out The Skyline Tower, an awesome 30-story apartment building right in the middle of The Bronx. You’ll love the amazing views of the city skyline from here! The place has roomy one, two, and three-bedroom apartments, plus some great amenities like a rooftop terrace, a gym, and a concierge available 24/7. Dive into the lively culture and convenience of New York City, all just steps away!",
    increase: 100,
    ivestmentPrice: 4000,
    startingPrice: 3600,
    plusPrice: 400,
    plusExpectations: 600,
    expectationsIncrease: 20.11,
  },
];

export default function RealEstate() {
  return (
    <div className={styles.realEstate}>
      <Header article="Real Estate" notPrimary linkBack="/pages/investment" />
      <Money money={300} />
      <ProductContainer items={products} />
    </div>
  );
}
