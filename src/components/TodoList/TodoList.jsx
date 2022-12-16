import { Icon } from '../UI';
import { TodoListItem } from './components/TodoListItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ todo }) => {
  const { tasks, title, color } = todo;

  return (
    <div className={styles.tasks}>
      <h2
        className={styles.tasksTitle}
        style={{ color: color }}
      >
        {title}
        <Icon
          name='edit'
          className={styles.tasksIcon}
        />
      </h2>
      <ul className={styles.todoList}>
        {tasks?.map((task) => (
          <TodoListItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
