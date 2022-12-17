import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoTask } from '../../../../store/todoSlice';
import { Icon } from '../../../UI';
import styles from '../../TodoList.module.scss';

export const TodoListItem = ({ task }) => {
  const { title, checked, id } = task;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const toggleCheckedHandler = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <li className={styles.todoListItem}>
      <div className={styles.todoListItemInput}>
        <input
          type='checkbox'
          id='icon'
          checked={checked}
          onChange={toggleCheckedHandler}
        />
        <label htmlFor='icon' />
      </div>
      <div className={styles.todoListItemWrap}>
        <p className={styles.todoListItemWrapTitle}>{title}</p>
        <Icon
          name='plus'
          className={styles.todoListItemWrapIcon}
          onClick={() => dispatch(removeTodoTask({ title }))}
        />
      </div>
    </li>
  );
};
