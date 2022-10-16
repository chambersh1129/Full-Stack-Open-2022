import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const DisplayAnecdote = ({ anecdote, count }) => {
  return (
    <>
      <div>{anecdote}</div>
      <div>has {count} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const newAnecdote = () => {
    let val = Math.floor(Math.random() * anecdotes.length)
    setSelected(val)
  }

  const castVote = (selected) => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = () => {
    let mostVotes = Math.max(...votes)
    return votes.indexOf(mostVotes)
  }

  const mostVotesIndex = maxVotes()

  return (
    <div>
      <Title text="Anecdote of the day" />
      <DisplayAnecdote anecdote={anecdotes[selected]} count={votes[selected]} />
      <button onClick={() => castVote(selected)}>vote</button>
      <button onClick={() => newAnecdote()}>next anecdote</button>
      <Title text="Anecdote with most votes" />
      <DisplayAnecdote anecdote={anecdotes[mostVotesIndex]} count={votes[mostVotesIndex]} />
    </div >
  )
}

export default App