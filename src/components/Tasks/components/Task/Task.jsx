import classNames from 'classnames';
import { Icon } from '../../../UI/';
import styles from '../../Tasks.module.scss';

export const Task = ({ task }) => {
  const { title, color, checked } = task;

  const deleteTaskHandler = () => {
    console.log('Delete task');
  };

  const editedTitle = title.length > 10 ? title.slice(0, 11) + '...' : title;

  return (
    <li className={classNames(styles.taskItem, checked && styles.active)}>
      <div className={classNames(styles.taskItemColor, styles[color])} />
      <div className={styles.taskItemWrapper}>
        <span className={styles.taskItemTitle}>{editedTitle}</span>
        <Icon name='plus' className={styles.taskItemIcon} onClick={deleteTaskHandler} />
      </div>
    </li>
  );
};
