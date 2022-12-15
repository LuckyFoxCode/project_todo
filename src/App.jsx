import { Aside, Main } from './components/';

export const App = () => {
  // const db = [
  //   {
  //     id: 'f1',
  //     title: 'Products',
  //     color: 'red',
  //     checked: true,
  //     tasks: [
  //       { id: 't1', title: 'Milk', checked: false },
  //       { id: 't2', title: 'Bread', checked: true },
  //       { id: 't3', title: 'Water', checked: false },
  //     ],
  //   },
  //   {
  //     id: 'f2',
  //     title: 'Films',
  //     color: 'red',
  //     checked: false,
  //     tasks: [
  //       { id: 't1', title: 'Film1', checked: false },
  //       { id: 't2', title: 'Film2', checked: true },
  //       { id: 't3', title: 'Film3', checked: false },
  //     ],
  //   },
  // ];

  return (
    <div className='App'>
      <Aside />
      <Main />
    </div>
  );
};
