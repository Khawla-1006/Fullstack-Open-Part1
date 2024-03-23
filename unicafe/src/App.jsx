import { useState } from 'react'

const FeedSubmission = (props) =>{
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Button = (props) =>{
  return (
    <>
    <FeedSubmission text = 'good' handleClick = {props.handleGoodSubmit} />
    <FeedSubmission text = 'neutral' handleClick = {props.handleNeutralSubmit} />
    <FeedSubmission text = 'bad' handleClick = {props.handleBadSubmit} />
    </>
  )
}

const StatisticLine = (props) =>{
  console.log(props.value)
  if(!props.value){
    return;
  }else{
    return <p>{props.text} {props.value}</p>
  }
}

const Statistics = (props) =>{
  console.log(props)
  return(
    <>
    <StatisticLine text="good" value={props.goodFeeds} />
    <StatisticLine text="neutral" value={props.neutralFeeds} />
    <StatisticLine text="bad" value={props.badFeeds} />
    <StatisticLine text="all" value={props.allFeeds} />
    <StatisticLine text="average" value={props.average} />
    <StatisticLine text="positive" value={props.positiveFeeds} />
    </>
  )
}

const Display = (props) =>{
    if(props.allFeedbacks === 0){
      return <p>No feedback given</p>
    }else{
      return <Statistics />
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

  return (
    <div>

      <h1>Give feedback</h1>
    <Button 
    handleGoodSubmit = {handleGood}
    handleNeutralSubmit = {handleNeutral}
    handleBadSubmit = {handleBad} 
    />

      <h1>Statistics</h1>
      <Display allFeedbacks= {all} />
    <Statistics 
    goodFeeds = {good}
    badFeeds = {bad}
    neutralFeeds = {neutral}
    allFeeds = {all}
    average = {average()} 
    positiveFeeds = {positiveFeed()}
    />
    </div>
  )
}

export default App
