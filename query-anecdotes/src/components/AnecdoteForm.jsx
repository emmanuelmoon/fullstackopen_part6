import { useNotificationDispatch } from '../NotificationReducer'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from './requests'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation( createAnecdote,{ 
    onSuccess: (data) => {
      dispatch({type: 'CREATE', payload: data.content})
      setTimeout(() => {
        dispatch({type: 'CLEAR'})
      }, 5000)
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: (err) => {
      dispatch({ type: 'ERROR', payload: err.message })
      setTimeout(() => {
        dispatch({type: 'CLEAR'})
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
