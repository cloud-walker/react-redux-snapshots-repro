import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {App} from './components/App'

const counterReducer = (state = 0, action) => {
  if (action.type == 'INCREMENT') {
    return state + 1
  }

  if (action.type == 'DECREMENT') {
    return state - 1
  }

  return state
}
const store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
