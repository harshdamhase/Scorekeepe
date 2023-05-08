import './App.css';

import { useState } from 'react'

function App() {

  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  return (
    <div className='Container'>
      <h2 className='headlin'>Scored Board</h2>

      <div className='scorecard'>
        <h2 className='TeamA'>Team A</h2>
        <h3 className='scoreA'>{scoreA}</h3>

        <button className='btn btn-inc' onClick={() =>
          setScoreA(scoreA + 1)
        }>+</button>

        <button className='btn btn-dec' onClick={() => {
          if (scoreA === 0) {
            alert("Score can't be negative")
          }
          else {
            setScoreA(scoreA - 1)
          }

        }}>-</button>

      </div>


      <div className='scorecard'>
        <h2 className='TeamB'> Team B</h2>
        <h3 className='scoreB'>{scoreB}</h3>

        <button className='btn btn-inc' onClick={() =>
          setScoreB(scoreB + 1)
        }>+</button>

        <button className='btn btn-dec' onClick={() =>
          setScoreB(scoreB - 1)
        }>-</button>

      </div>
    </div>
  );
}

export default App;
