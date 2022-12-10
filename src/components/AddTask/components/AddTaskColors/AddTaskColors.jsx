import classNames from 'classnames';
import styles from '../../AddTask.module.scss';

export const AddTaskColors = ({ colors }) => {
  return (
    <div className={styles.addTaskColors}>
      {[] &&
        colors.map((color) => (
          <div
            key={color.id}
            className={classNames(styles.addTaskColorsWrap, color.checked && styles.active)}
            style={{ backgroundColor: color.color }}>
            <input type='checkbox' id='checkbox' className={styles.addTaskColorsCheckbox} />
            <label htmlFor='checkbox' className={styles.addTaskColorsFakeCheckbox} />
          </div>
        ))}
    </div>
  );
};
