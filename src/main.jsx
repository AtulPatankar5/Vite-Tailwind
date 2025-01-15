import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './Store/index.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import { ThemeProvider } from './context/ThemeContext.jsx'

let persistor = persistStore(Store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
