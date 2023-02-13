import styles from './App.module.scss';
import { List } from './components/common';

const allTasks = [{ id: 1, icon: true, active: true, iconName: 'all', label: 'Все задачи' }];
const tasks = [
  { id: 1, color: 'pink', active: false, label: 'Фронтенд' },
  { id: 2, color: '#42b883', active: false, label: 'Покупки' },
  { id: 3, color: '#42b', active: false, label: 'Фильмы и се...' },
];

export const App = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__sidebar}>
        <List items={allTasks} />
        <List items={tasks} />
      </div>
      <div className={styles.todo__tasks}></div>
    </div>
  );
};
