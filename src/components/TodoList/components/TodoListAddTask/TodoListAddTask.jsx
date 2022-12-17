import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoTask } from '../../../../store/todoSlice';
import { Button } from '../../../UI';
import styles from './TodoListAddTask.module.scss';

export const TodoListAddTask = ({ setShowAddTask, setShowForm }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (title) => dispatch(addTodoTask({ title }));

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addTask(inputValue);

    setInputValue('');
    setShowForm((prevState) => !prevState);
    setShowAddTask((prevState) => !prevState);
  };

  const cancelHandler = () => {
    setShowForm((prevState) => !prevState);
    setShowAddTask((prevState) => !prevState);
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.addTask}
    >
      <input
        type='text'
        value={inputValue}
        placeholder='Текст задачи'
        onChange={inputValueHandler}
        className={styles.addTaskInput}
      />
      <div className={styles.addTaskWrap}>
        <Button
          type='submit'
          size='submit'
          className={styles.addTaskWrapBtn}
        >
          Добавить задачу
        </Button>
        <Button
          type='button'
          size='cancel'
          onClick={cancelHandler}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
