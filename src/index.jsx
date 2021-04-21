import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App'
import './locales/i18n'

import './assets/styles/reset.css'

ReactDOM.render(
    <BrowserRouter>
         { /*   temporarily using /:id to access each individual event
                until we handle the infrastructure on EVER-121  */}
          <Route path="/:id">
            <App />
        </Route>
    </BrowserRouter>, 
    document.getElementById('root'))
