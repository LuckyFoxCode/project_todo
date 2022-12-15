
import styles from './TodoList.module.scss';
import { TodoListItem } from "./components/TodoListItem";

export const TodoList = () => {
  return (
    <ul className={styles.todoList}>
      <TodoListItem />
    </ul>
  )
};