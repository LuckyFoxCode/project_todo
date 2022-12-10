import { useState } from 'react';
import { Aside, Main } from './components/';

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 't1',
      color: 'n1',
      title: 'Продукты',
      checked: false,
    },
    {
      id: 't2',
      color: 'n2',
      title: 'Фронтенд',
      checked: true,
    },
    {
      id: 't3',
      color: 'n3',
      title: 'Фильмы и сериалы',
      checked: false,
    },
    {
      id: 't4',
      color: 'n4',
      title: 'Книги',
      checked: false,
    },
    {
      id: 't5',
      color: 'n0',
      title: 'Личное',
      checked: false,
    },
  ]);

  return (
    <div className='App'>
      <Aside tasks={tasks} />
      <Main tasks={tasks} />
    </div>
  );
};
