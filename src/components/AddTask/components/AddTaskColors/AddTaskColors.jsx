import classNames from 'classnames';
import styles from '../../AddTask.module.scss';

export const AddTaskColors = ({ item, isSelected, checkedColorHandler }) => {
  const { id, color, checked } = item;

  return (
    <div className={styles.addTaskColor}>
      <input
        className={styles.addTaskColorInput}
        type='radio'
        name='radio'
        id={id}
        value={color}
        checked={isSelected === color}
        onChange={checkedColorHandler}
      />
      <label
        className={classNames(styles.addTaskColorLabel, checked && styles.active)}
        style={{ backgroundColor: color }}
        htmlFor={id}
      />
    </div>
  );
};
