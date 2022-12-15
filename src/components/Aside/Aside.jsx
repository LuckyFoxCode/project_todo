import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTask } from '../AddTask';
import { Tasks } from '../Tasks';
import { Button, Icon } from '../UI/';
import styles from './Aside.module.scss';

export const Aside = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const folders = useSelector((state) => state.todos.todos);

  const showAllTasksHandler = () => {
    console.log('Show all tasks.');
  };

  const addNewFolderHandler = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <aside className={styles.aside}>
      {!!folders.length && (
        <Button
          type='button'
          className={styles.asideTasks}
          onClick={showAllTasksHandler}
        >
          <Icon
            name='all'
            className={styles.asideTasksIcon}
          />
          Все задачи
        </Button>
      )}

      <Tasks folders={folders} />

      <div className={styles.asideWrapper}>
        <Button
          type='button'
          icon='plus'
          onClick={addNewFolderHandler}
        >
          Добавить папку
        </Button>

        {showAddTask && (
          <AddTask
            setShowAddTask={setShowAddTask}
            showAddTask={showAddTask}
          />
        )}
      </div>
    </aside>
  );
};
