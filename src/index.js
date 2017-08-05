import React                      from 'react'
import ReactDOM                   from 'react-dom'
import App                        from './components/App'
import { createStore }            from 'redux'
import reducer                    from './reducers'
import registerServiceWorker      from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
