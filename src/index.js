import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { DrizzleProvider } from 'drizzle-react'
import { LoadingContainer } from 'drizzle-react-components'

// Layouts
import App from './App'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

/* local state variables */
ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
      <LoadingContainer>
        <Router history={history} store={store}>
          <Route path="/" component={App}/>
        </Router>
      </LoadingContainer>
    </DrizzleProvider>
  ),
  document.getElementById('page-wrapper')
)
