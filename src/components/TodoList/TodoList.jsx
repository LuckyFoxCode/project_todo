import { useState } from 'react';
import { Button, Icon } from '../UI';
import { TodoListAddTask } from './components/TodoListAddTask/TodoListAddTask';
import { TodoListItem } from './components/TodoListItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ todo }) => {
  const { tasks, title, color } = todo;
  const [showForm, setShowForm] = useState(false);
  const [showAddTask, setShowAddTask] = useState(true);

  const showAddTaskHandler = () => {
    setShowForm((prevState) => !prevState);
    setShowAddTask((prevState) => !prevState);
  };

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
      {showAddTask && (
        <Button
          type='button'
          icon='plus'
          className={styles.addTask}
          onClick={showAddTaskHandler}
        >
          Новая задача
        </Button>
      )}
      {showForm && (
        <TodoListAddTask
          setShowAddTask={setShowAddTask}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};
