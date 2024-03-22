import { useState } from 'react'

const Button = (props) =>{
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Stat = ({text, feed}) =>{
  return <p>{text}{feed}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleBad = () => setBad(bad + 1)
 
  const handleNeutral = () => setNeutral(neutral + 1)

  
  return (
    <div>

      <h1>Give feedback</h1>
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleBad} text="bad" />
    <Button handleClick={handleNeutral} text="neutral" />

      <h1>Statistics</h1>
    <Stat text = 'good ' feed = {good}  />
    <Stat text = 'bad ' feed = {bad}  />
    <Stat text = 'neutral ' feed = {neutral}  />

    </div>
  )
}

export default App
