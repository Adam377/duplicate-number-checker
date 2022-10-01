import Numbers from './components/Numbers/Numbers';
import NumberForm from './components/NewNumber/NumberForm';

import './App.css';

function App() {
  const numbers = [
    {
      number: 143603,
    },
    {
      number: 43141,
    },
    {
      number: 43155,
    },
    {
      number: 153305,
    },
    {
      number: 143611,
    },
    {
      number: 150131,
    },
    {
      number: 153333,
    },
  ];

  const addNumberHandler = (number) => {
    console.log(number);
  };

  return (
    <div>
      <h1>Duplicate Number Checker!</h1>
      <NumberForm onAddNumber={addNumberHandler}/>
      <Numbers allNumbers={numbers} />
    </div>
  );
}

export default App;
