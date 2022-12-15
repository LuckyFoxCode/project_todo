import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { removeTodoFolder } from '../../../../store/todoSlice';
import { Icon } from '../../../UI/';
import styles from '../../Tasks.module.scss';

export const Task = ({ folder }) => {
  const { id, title, color, checked } = folder;

  const dispatch = useDispatch();

  const editedTitle = title.length > 10 ? title.slice(0, 11) + '...' : title;

  return (
    <li className={classNames(styles.taskItem, checked && styles.active)}>
      <div
        className={classNames(styles.taskItemColor)}
        style={{ backgroundColor: color }}
      />
      <div className={styles.taskItemWrapper}>
        <span className={styles.taskItemTitle}>{editedTitle}</span>
        <Icon
          name='plus'
          className={styles.taskItemIcon}
          onClick={() => dispatch(removeTodoFolder({ id }))}
        />
      </div>
    </li>
  );
};
