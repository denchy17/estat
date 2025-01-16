import styles from "./TasksContainer.module.scss";

import TaskItem from "../task/TaskItem";

interface TaskItem {
  logo: string | any,
  reward: number,
  link?: string,
  taskTitle: string,
  taskText: string,
}

interface Props {
  items: TaskItem[];
}

export default function TasksContainer({ items }: Props) {
  return (
    <div className={styles.tasksContainer}>
      {items.map((item, index) => (
        <TaskItem key={index} {...item} />
      ))}
    </div>
  );
}
