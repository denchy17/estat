import { ProfileComponent } from "@/components/profileComponent";
import styles from "./Home.module.scss";

import { Onboard } from "@/components/onboarding";
import { HomeContainer, Section } from "@/components/containers";

import onBoardOne from "@/../public/onboardOne.png";

const newUser = false;

export default function Home() {
  return (
    <div className={styles.page}>
      <Onboard />
      <ProfileComponent picture={onBoardOne} name="Samantha" nickname="@Samantha29" progress={50} currentAchivement="one" />
      <HomeContainer>
        <Section title="Portfolio">
          Hello
        </Section>
        <Section title="Real World Assets">
          Real World Assets
        </Section>
      </HomeContainer>
    </div>
  );
}
