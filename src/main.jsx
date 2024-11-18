import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ******************************************************

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// requirements:
// 
// data array in separate JS file
// --> title, location, google maps link, start date, end date, description, image URL
// use .map() and props
// styled and polished
// 
// components:
// 
// header
// location card