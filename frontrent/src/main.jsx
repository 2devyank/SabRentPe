import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import { rentApi } from './features/rentSlice'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <ApiProvider api={rentApi}>
    <App />
      </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
