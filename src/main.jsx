import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/card.css'
import './styles/lista.css'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <React.StrictMode>
      <CarritoApp/>
    </React.StrictMode>,
  </BrowserRouter>
)
