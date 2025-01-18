"use client";

import { useEffect, useState } from "react";
import { initializeUser, getUserPortfolio, getUserAssets } from "@/app/api/estateProvider"; // Update this path as needed
import { ProfileComponent } from "@/components/profileComponent";
import styles from "./Home.module.scss";

import { Onboard } from "@/components/onboarding";
import { HomeContainer, Section } from "@/components/containers";

import PortfolioComponent from "@/components/portfolioComponent/PortfolioComponent";
import BoughtAsset from "@/components/asset/BoughtAsset";
import profilePic from "@/../public/profilePic.jpeg";
import buildingPicture from "@/../public/buildingPicture.jpeg";

export default function Home() {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store errors

  const tgId = 533547709;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Initializing user...");
        const initializeResponse = await initializeUser(tgId);
        console.log("User Initialized:", initializeResponse);

        // Save the response data in state
        setUserData(initializeResponse);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Display loading or error states
  if (loading) {
    return <div className={styles.page}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.page}>Error: {error}</div>;
  }

  return (
    <div className={styles.page}>
      {userData && (
        <div>
          {userData}
        </div>
      )}
      <Onboard />
      <ProfileComponent
        picture={profilePic}
        name="Samantha"
        nickname="@Samantha29"
        progress={50}
        currentAchivement="one"
      />
      <HomeContainer>
        <Section title="Portfolio">
          <PortfolioComponent
            value={30000}
            balance={40000}
            plusValue={21004}
            plusPracentage={20.11}
          />
        </Section>
        <Section title="Real World Assets">
          <BoughtAsset
            number={1}
            title="Property title"
            image={buildingPicture}
            value={30000}
            plusValue={21004}
            plusPercentage={20.11}
            dividend={3000}
            plusDividend={200}
            dividendDays={1}
            marketValue="$10,800 - $12,000"
            increase={100}
            totalEarning={3600}
          />
          <BoughtAsset
            number={2}
            title="Property title"
            image={buildingPicture}
            value={30000}
            plusValue={21004}
            plusPercentage={20.11}
            dividend={3000}
            plusDividend={200}
            dividendDays={1}
            marketValue="$10,800 - $12,000"
            increase={100}
            totalEarning={3600}
          />
          <BoughtAsset
            number={3}
            title="Property title"
            image={buildingPicture}
            value={30000}
            plusValue={21004}
            plusPercentage={20.11}
            dividend={3000}
            plusDividend={200}
            dividendDays={1}
            marketValue="$10,800 - $12,000"
            increase={100}
            totalEarning={3600}
          />
        </Section>
      </HomeContainer>
    </div>
  );
}
