import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const PrintVar = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  return (
    <>
      <p>all {all}</p>
      <p>average {((1 * good) + (-1 * bad)) / all}</p>
      <p>positive {good / all}%</p>
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
      <PrintVar text={textGood} value={good} />
      <PrintVar text={textNeutral} value={neutral} />
      <PrintVar text={textBad} value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App