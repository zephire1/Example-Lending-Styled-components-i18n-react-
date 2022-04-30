import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Provider from './Components/Provider'
import { GlobalStyle } from './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);