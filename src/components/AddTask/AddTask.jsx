import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoFolder } from '../../store/todoSlice';
import { Button, Icon } from '../UI/';
import styles from './AddTask.module.scss';
import { AddTaskColors } from './components/AddTaskColors/AddTaskColors';

export const AddTask = ({ setShowAddTask }) => {
  const [isSelected, setIsSelected] = useState('#c9d1d3');
  const [inputTitle, setInputTitle] = useState('');
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.colors);

  const addFolder = (title, color) => dispatch(addTodoFolder({ title, color }));

  const closeModal = () => {
    setShowAddTask(false);
  };

  const onInputTitle = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setInputTitle(e.target.value);
  };

  const checkedColorHandler = (e) => {
    setIsSelected((prevState) => (prevState = e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (inputTitle.length === 0) {
      setIsValid(false);
      return;
    }

    addFolder(inputTitle, isSelected);
    setShowAddTask(false);
  };

  return (
    <form
      className={styles.addTask}
      onSubmit={onSubmitHandler}
    >
      <div className={styles.addTaskWrapper}>
        <Icon
          name='plus'
          className={styles.addTaskWrapperIcon}
          onClick={closeModal}
        />
      </div>
      <input
        className={classNames(
          styles.addTaskInput,
          !!isValid ? styles.addTaskInputValid : styles.addTaskInputInvalid,
        )}
        type='text'
        placeholder='Название папки'
        value={inputTitle}
        onChange={onInputTitle}
        required
      />
      <div className={styles.addTaskColors}>
        {colors?.map((item) => (
          <AddTaskColors
            key={item.id}
            item={item}
            checkedColorHandler={checkedColorHandler}
            isSelected={isSelected}
          />
        ))}
      </div>
      <Button
        type='submit'
        size='popup'
      >
        Добавить
      </Button>
    </form>
  );
};
