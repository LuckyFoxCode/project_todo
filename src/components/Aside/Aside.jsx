import { Tasks } from '../Tasks';
import { Button, Icon } from '../UI/';
import styles from './Aside.module.scss';

export const Aside = ({ tasks }) => {
  const showAllTasksHandler = () => {
    console.log('Show all tasks.');
  };

  const addNewFolderHandler = () => {
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
      <Button type='button' icon='plus' onClick={addNewFolderHandler}>
        Добавить папку
      </Button>
    </aside>
  );
};
