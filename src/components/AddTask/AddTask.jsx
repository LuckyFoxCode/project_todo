import { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Button, Icon } from '../UI/';
import styles from './AddTask.module.scss';
import { AddTaskColors } from './components/AddTaskColors/AddTaskColors';

export const AddTask = ({ setShowAddTask, addFolderHandler, showAddTask }) => {
  const [isSelected, setIsSelected] = useState('#c9d1d3');
  const [inputTitle, setInputTitle] = useState('');
  const [colors, setColors] = useState([
    { id: 'c0', color: '#c9d1d3', checked: true },
    { id: 'c1', color: '#42b883', checked: false },
    { id: 'c2', color: '#64c4ed', checked: false },
    { id: 'c3', color: '#ffbbcc', checked: false },
    { id: 'c4', color: '#b6e6bd', checked: false },
    { id: 'c5', color: '#c355f5', checked: false },
    { id: 'c6', color: '#09011a', checked: false },
    { id: 'c7', color: '#ff6464', checked: false },
  ]);

  const transitions = useTransition(showAddTask, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showAddTask,
    config: config.molasses,
  });

  const closeModal = () => {
    setShowAddTask(false);
  };

  const onInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const checkedColorHandler = (e) => {
    setIsSelected((prevState) => (prevState = e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.random().toString(),
      title: inputTitle,
      color: isSelected,
      checked: false,
    };

    addFolderHandler(newTask);
    setShowAddTask(false);
  };

  return transitions(
    (s, item) =>
      item && (
        <animated.div style={s}>
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
              className={styles.addTaskInput}
              type='text'
              placeholder='Название папки'
              value={inputTitle}
              onChange={onInputTitle}
              required
            />
            <div className={styles.addTaskColors}>
              {(colors || []).map((item) => (
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
        </animated.div>
      ),
  );
};
