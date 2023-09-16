import { useQuery } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll } from './components/requests'

const App = () => {
  const info = useQuery({ 
    queryKey: ['anecdotes'],
    queryFn: getAll,
    return: 1})

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  if (info.isLoading) {
    return <div>Loading...</div>
  }
  
  if (info.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = info.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App