import { useState } from 'react'
import Statistics from './Statistics';
import Button from './Button';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const All = good + neutral + bad;

  const incrementGood = () => {
    setGood(prevGood => prevGood + 1);
  }

  const incrementNeutral = () => {
    setNeutral(prevN => prevN + 1);
  }

  const incrementBad = () => {
    setBad(prevBad => prevBad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handlerClick={incrementGood} text='good'/>
      <Button handlerClick={incrementNeutral} text='neutral'/>
      <Button handlerClick={incrementBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} All={All}/>
    </div>
  )
}

export default App
