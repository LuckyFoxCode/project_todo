import { useState } from 'react';
import { Aside, Main } from './components/';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <Aside tasks={tasks} />
      <Main tasks={tasks} />
    </div>
  );
};
