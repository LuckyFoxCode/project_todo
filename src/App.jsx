import { useState } from 'react';
import { Aside, Main } from './components/';

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 't1',
      color: '#42b883',
      title: 'Продукты',
      checked: false,
    },
    {
      id: 't2',
      color: '#64c4ed',
      title: 'Фронтенд',
      checked: true,
    },
    {
      id: 't3',
      color: '#ffbbcc',
      title: 'Фильмы и сериалы',
      checked: false,
    },
    {
      id: 't4',
      color: '#b6e6bd',
      title: 'Книги',
      checked: false,
    },
    {
      id: 't5',
      color: '#c9d1d3',
      title: 'Личное',
      checked: false,
    },
  ]);

  const addFolderHandler = (task) => {
    const newFolder = [...tasks, task];
    setTasks(newFolder);
  };

  return (
    <div className='App'>
      <Aside tasks={tasks} addFolderHandler={addFolderHandler} />
      <Main tasks={tasks} />
    </div>
  );
};
