import styles from "./Task.module.scss";

import { TasksContainer } from "@/components/containers";
import { TopBackground } from "@/components/particles";

import logo from "@/../public/profilePic.jpeg";
import taskIcon from "@/../public/taskIcon.png";

const tasks = [
  {
    logo: logo,
    reward: 1000,
    taskTitle: "Follow us on Instagram and get $1000",
    taskText: "Follow us on Instagram and get $1000",
  },
  {
    logo: logo,
    reward: 1000,
    taskTitle: "Follow us on Instagram and get $1000",
    taskText: "Follow us on Instagram and get $1000",
  },
  {
    logo: logo,
    reward: 1000,
    taskTitle: "Follow us on Instagram and get $1000",
    taskText: "Follow us on Instagram and get $1000",
  },
];

export default function Task() {
    return (
      <div className={styles.task}>
        <TopBackground icon={taskIcon} title="Earn more" text="Complete your tasks and earn more!" />
        <TasksContainer items={tasks} />
      </div>
    );
}
  