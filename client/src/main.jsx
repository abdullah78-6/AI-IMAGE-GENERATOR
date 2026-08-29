import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';
import {Provider} from "react-redux"
import Imagestore from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Imagestore}>
    <Toaster/>
    <App />
    </Provider>
  </StrictMode>,
)
