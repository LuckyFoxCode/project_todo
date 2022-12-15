import { useSelector } from 'react-redux';
import { TodoList } from '../TodoList';
import styles from './Main.module.scss';

export const Main = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <main className={styles.main}>
      {!todos.length && <h2 className={styles.mainEmpty}>Задачи отсутствуют</h2>}
      {todos.length && <TodoList />}
    </main>
  );
};
