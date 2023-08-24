import { useSelector, useDispatch } from 'react-redux'

import { Vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if(filter === '' ) {
      return anecdotes
    }
    return anecdotes.filter(anecdote => anecdote.content.includes(filter))
  })

  const copyAnecdotes = [...anecdotes]
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(Vote(id))
  }

  function comparison(a, b) {
    return b.votes - a.votes 
  }

  return (
    <>
    {copyAnecdotes.sort(comparison).map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList