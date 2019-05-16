import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import * as serviceWorker from './serviceWorker'
import api from './api/index'
import App from '../src/components/App'

const { REACT_APP_API_URL } = process.env

api.baseUrl = REACT_APP_API_URL

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
