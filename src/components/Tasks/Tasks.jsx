import { Task } from './components/Task';
import styles from './Tasks.module.scss';

export const Tasks = ({ tasks }) => {
  return <ul className={styles.tasks}>{[] && tasks.map((task) => <Task key={task.id} task={task} />)}</ul>;
};
