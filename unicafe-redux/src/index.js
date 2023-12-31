import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import counterReducer from './reducer/counterReducer';

const store = createStore(counterReducer)

const App = () => {
  return(<div>
    <button onClick={e => store.dispatch({type: 'GOOD'})}>good</button>
    <button onClick={e => store.dispatch({type: 'OK'})}>ok</button>
    <button onClick={e => store.dispatch({type: 'BAD'})}>bad</button>
    <button onClick={e => store.dispatch({type: 'ZERO'})}>reset stats</button>
    <p>good {store.getState().good}</p>
    <p>ok {store.getState().ok}</p>
    <p>bad {store.getState().bad}</p>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />)
}

renderApp();
store.subscribe(renderApp);