import { useState } from 'react';
import { AddTask } from '../AddTask';
import { Tasks } from '../Tasks';
import { Button, Icon } from '../UI/';
import styles from './Aside.module.scss';

export const Aside = ({ tasks }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  const showAllTasksHandler = () => {
    console.log('Show all tasks.');
  };

  const addNewFolderHandler = () => {
    setShowAddTask(!showAddTask);
    console.log('Add new folder.');
  };

  return (
    <aside className={styles.aside}>
      {!!tasks.length && (
        <Button type='button' className={styles.asideTasks} onClick={showAllTasksHandler}>
          <Icon name='all' className={styles.asideTasksIcon} />
          Все задачи
        </Button>
      )}
      <Tasks tasks={tasks} />
      <div className={styles.asideWrapper}>
        <Button type='button' icon='plus' onClick={addNewFolderHandler}>
          Добавить папку
        </Button>
        {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}
      </div>
    </aside>
  );
};
