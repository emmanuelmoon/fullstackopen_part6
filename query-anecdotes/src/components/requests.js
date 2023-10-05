import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdote = (anecdote) =>
  axios.post(baseUrl, anecdote).then(res => res.data)

export const changeAnecdote = (anecdote) =>
  axios.put(`${baseUrl}/${anecdote.id}`, anecdote)

