import { Task } from './components/Task';
import styles from './Tasks.module.scss';

export const Tasks = ({ folders }) => {
  return (
    <ul className={styles.tasks}>
      {folders?.map((folder) => (
        <Task
          key={folder.id}
          folder={folder}
        />
      ))}
    </ul>
  );
};
