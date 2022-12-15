import styles from './Main.module.scss';
import { TodoList } from "../TodoList";

export const Main = ({tasks}) => {
  return (
    <main className={styles.main}>
      {!tasks.length && <h2 className={styles.mainEmpty}>Задачи отсутствуют</h2>}
      {tasks.length && <TodoList />}
    </main>
  );
};
