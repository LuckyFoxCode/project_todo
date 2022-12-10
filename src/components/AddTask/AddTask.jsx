import { useState } from 'react';
import { Button, Icon } from '../UI/';
import styles from './AddTask.module.scss';
import { AddTaskColors } from './components/AddTaskColors/AddTaskColors';

export const AddTask = ({ setShowAddTask }) => {
  const colors = [
    { id: 'c0', color: '#c9d1d3', checked: false },
    { id: 'c1', color: '#42b883', checked: true },
    { id: 'c2', color: '#64c4ed', checked: false },
    { id: 'c3', color: '#ffbbcc', checked: false },
    { id: 'c4', color: '#b6e6bd', checked: false },
    { id: 'c5', color: '#c355f5', checked: false },
    { id: 'c6', color: '#09011a', checked: false },
    { id: 'c7', color: '#ff6464', checked: false },
  ];

  const [inputTitle, setInputTitle] = useState('');

  const closeModal = () => {
    setShowAddTask(false);
  };

  const onInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(inputTitle);
    setShowAddTask(false);
  };

  return (
    <form className={styles.addTask} onSubmit={onSubmitHandler}>
      <div className={styles.addTaskWrapper}>
        <Icon name='plus' className={styles.addTaskWrapperIcon} onClick={closeModal} />
      </div>
      <input
        className={styles.addTaskInput}
        type='text'
        placeholder='Название папки'
        value={inputTitle}
        onChange={onInputTitle}
      />
      <AddTaskColors colors={colors} />
      <Button type='submit' size='popup'>
        Добавить
      </Button>
    </form>
  );
};
