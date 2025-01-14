import { ProfileComponent } from "@/components/profileComponent";
import styles from "./Home.module.scss";

import { Onboard } from "@/components/onboarding";
import { HomeContainer, Section } from "@/components/containers";

import PortfolioComponent from "@/components/portfolioComponent/PortfolioComponent";
import BoughtAsset from "@/components/asset/BoughtAsset";
import profilePic from "@/../public/profilePic.jpeg";
import buildingPicture from "@/../public/buildingPicture.jpeg";

const newUser = false;

export default function Home() {
  return (
    <div className={styles.page}>
      <Onboard />
      <ProfileComponent picture={profilePic} name="Samantha" nickname="@Samantha29" progress={50} currentAchivement="one" />
      <HomeContainer>
        <Section title="Portfolio">
          <PortfolioComponent value={30000} balance={40000} plusValue={21004} plusPracentage={20.11} />
        </Section>
        <Section title="Real World Assets">
          <BoughtAsset number={1} title="Property title" image={buildingPicture} value={30000} plusValue={21004} plusPercentage={20.11} dividend={3000} plusDividend={200} dividendDays={1} marketValue="$10,800 - $12,000" increase={100} totalEarning={3600} />
          <BoughtAsset number={2} title="Property title" image={buildingPicture} value={30000} plusValue={21004} plusPercentage={20.11} dividend={3000} plusDividend={200} dividendDays={1} marketValue="$10,800 - $12,000" increase={100} totalEarning={3600} />
          <BoughtAsset number={3} title="Property title" image={buildingPicture} value={30000} plusValue={21004} plusPercentage={20.11} dividend={3000} plusDividend={200} dividendDays={1} marketValue="$10,800 - $12,000" increase={100} totalEarning={3600} />
        </Section>
      </HomeContainer>
    </div>
  );
}
