import { useEffect, useState } from 'react';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0);
  const [prevNumber, setPrevNumber] = useState(null);
  
  const setNewAnecdote = () => {

    let newRandomNumber;

    do {
      newRandomNumber = Math.floor(Math.random() * anecdotes.length);
    } while (newRandomNumber === prevNumber);

    setSelected(newRandomNumber);
    setPrevNumber(newRandomNumber);

    
    console.log(selected);
  };

  const [numberOfVotes, setNumberOfVotes] = useState(Array(anecdotes.length).fill(0));

  console.log(numberOfVotes);
  
  let copy = [...numberOfVotes];

  const voteHandler = () => {
    copy[selected] += 1;
    setNumberOfVotes(copy);
  }

  const [largest, setLargest] = useState(null);

  const findLargestNumber = () => {
    const maxNumber = Math.max(...numberOfVotes);
    const index = numberOfVotes.indexOf(maxNumber);
    setLargest(index);
  }

  useEffect(() => {
    findLargestNumber();
  }, [numberOfVotes]);


  return (
    <div> 
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {numberOfVotes[selected]} votes</p>
      <br></br>
      <button onClick={voteHandler}>Vote</button>
      <button onClick={setNewAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {largest !== null && anecdotes[largest]}
    </div>
  )
}

export default App
