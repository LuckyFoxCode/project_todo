import { Icon } from '../UI';
import { TodoListItem } from './components/TodoListItem';
import styles from './TodoList.module.scss';

export const TodoList = () => {
  return (
    <div className={styles.tasks}>
      <h2 className={styles.tasksTitle}>
        Фронтенд
        <Icon
          name='edit'
          className={styles.tasksIcon}
        />
      </h2>
      <ul className={styles.todoList}>
        <TodoListItem />
      </ul>
    </div>
  );
};
