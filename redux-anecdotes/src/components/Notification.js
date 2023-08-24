import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(({ anecdotes, filter, notification}) => {
    if(notification !== '') {
      return notification
    }
    return null
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

export default Notification