import React, {useState} from 'react';

import Numbers from './components/Numbers/Numbers';
import NewNumber from './components/NewNumber/NewNumber';
import NumberCheck from './components/NumberCheck/NumberCheck';

import './App.css';

const DUMMY_NUMBERS = [
  {
    id: 0,
    number: '43141',
    headcode: '1A86',
  },
  {
    id: 1,
    number: '43155',
    headcode: '1A86',
  },
  {
    id: 2,
    number: '150123',
    headcode: '2T12',
  },
  {
    id: 3,
    number: '158954',
    headcode: '2C67',
  },
  {
    id: 4,
    number: '142009',
    headcode: '2T14',
  },
  {
    id: 5,
    number: '150128',
    headcode: '2T14',
  },
  {
    id: 6,
    number: '153305',
    headcode: 'Static at Exeter TMD',
  },
];

const App = () => {
  const [numbers, setNumbers] = useState(DUMMY_NUMBERS);

  const addNumberHandler = (number) => {
    setNumbers((prevNumbers) => {
      return [number, ...prevNumbers];
    });
  };

  return (
    <div>
      <h1 className="app-header">Duplicate Number Checker!</h1>
      <NewNumber onAddNumber={addNumberHandler}/>
      <NumberCheck />
      <Numbers allNumbers={numbers} />
    </div>
  );
}

export default App;
