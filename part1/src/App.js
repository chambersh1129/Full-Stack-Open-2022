import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, textGood, neutral, textNeutral, bad, textBad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

  return (
    <>
      <div>{textGood} {good}</div>
      <div>{textNeutral} {neutral}</div>
      <div>{textBad} {bad}</div>
      <div>all {all}</div>
      <div>average {((1 * good) + (-1 * bad)) / all}</div>
      <div>positive {(good / all) * 100}%</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const textGood = "good"
  const [neutral, setNeutral] = useState(0)
  const textNeutral = "neutral"
  const [bad, setBad] = useState(0)
  const textBad = "bad"

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text={textGood} />
      <Button onClick={() => setNeutral(neutral + 1)} text={textNeutral} />
      <Button onClick={() => setBad(bad + 1)} text={textBad} />
      <Title text="statistics" />
      <Statistics good={good} textGood={textGood} neutral={neutral} textNeutral={textNeutral} bad={bad} textBad={textBad} />
    </div>
  )
}

export default App