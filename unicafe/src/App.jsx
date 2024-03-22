import { useState } from 'react'

const Button = (props) =>{
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) =>{
  if(!props.value){
    return;
  }else{
    return <p>{props.text} {props.value}</p>

  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleBad = () => setBad(bad + 1)
 
  const handleNeutral = () => setNeutral(neutral + 1)
  
  let all = good + neutral + bad


  const average = () => {
    if(all === 0){
      return;
    }else {
      let sum =  good * 1 + neutral * 0 - bad
      return (sum / all).toFixed(2)
    }
  }

  const positiveFeed = () => {
    if(all === 0){
      return;
    }else{
      return (good / all * 100).toFixed(2) + ' %'
    }
  }

  const display = () =>{
    if(all === 0){
      return <p>No feedback given</p>
    }else{
      return <Statistics />
    }
  }



  return (
    <div>

      <h1>Give feedback</h1>
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleBad} text="bad" />
    <Button handleClick={handleNeutral} text="neutral" />

      <h1>Statistics</h1>
      {display()}
    <Statistics text='good' value={good} />
    <Statistics text='bad' value={bad} />
    <Statistics text='neutral' value={neutral} />
    <Statistics text='all' value={all} />
    <Statistics text='average' value={average()} />
    <Statistics text='positive' value={positiveFeed()} />
    </div>
  )
}

export default App
