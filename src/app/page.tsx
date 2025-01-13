import styles from "./page.module.scss";

import { Onboard } from "@/components/onboarding";

const newUser = false;

export default function Home() {
  return (
    <div className={styles.page}>
      <Onboard />
      Hello
    </div>
  );
}
