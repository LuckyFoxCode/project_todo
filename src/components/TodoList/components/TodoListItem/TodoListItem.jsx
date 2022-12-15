import styles from '../../TodoList.module.scss';
import { Icon } from "../../../UI";
import { useState } from "react";

export const TodoListItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckedHandler = () => {
    setIsChecked((prevState) => !prevState);
  }
  return (
    <li className={styles.todoListItem}>
      <div className={styles.todoListItemInput}>
        <input type="checkbox" id="icon" checked={isChecked} onChange={toggleCheckedHandler}/>
        <label htmlFor="icon"/>
      </div>
      <div className={styles.todoListItemWrap}>
        <p className={styles.todoListItemWrapTitle}>Изучить JavaScript</p>
        <Icon name="plus" className={styles.todoListItemWrapIcon}/>
      </div>
    </li>
  )
}