import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListProvider } from './Context/ListContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ListProvider>
        <App />
      </ListProvider>
  </React.StrictMode>,
)
