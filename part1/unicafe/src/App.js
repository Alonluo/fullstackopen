import { useState } from 'react';
import Statistics from './Statistics';
import Header from './Header';
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
        <Header text="give feedback"></Header>
          <Button label="good" onClick={()=>setGood(good+1)}> </Button>
          <Button label="neutral" onClick={()=>setNeutral(neutral+1)}> </Button>
          <Button label="bad" onClick={()=>setBad(bad+1)}> </Button>
          <Header text="Statistics"></Header>
        <Statistics good={good} neutral={neutral} bad = {bad}></Statistics>
      </div>
  )
}

export default App
