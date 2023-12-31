import { useSelector, useDispatch } from 'react-redux'

import { increaseVote } from '../reducers/anecdoteReducer'

import { notify } from '../reducers/notificationReducer'

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
    dispatch(increaseVote(id))
    const anecdote = copyAnecdotes.find(a => a.id === id)

    dispatch(notify(`you voted '${anecdote.content}'`, 5))
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