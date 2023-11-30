import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import load from './configuration/dxConfig'
import { Toaster } from 'react-hot-toast'

import './assets/css/dx.generic.soil-theme.css'
import './index.css'
import 'animate.css'

import { BrowserRouter } from 'react-router-dom'
import { AuthContextWrapper } from './context/AuthContext'
import { LoadingContextWrapper } from './context/LoadingContext'

load()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LoadingContextWrapper>
      <AuthContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextWrapper>
    </LoadingContextWrapper>
    <Toaster position='bottom-right' />
  </React.StrictMode>
)
