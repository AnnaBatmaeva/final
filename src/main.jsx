import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router";

import { Provider } from 'react-redux';

import "./styles/global.scss";

import router from './router/BrowserRouter.jsx'
import store from './store.js';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
