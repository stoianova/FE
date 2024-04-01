import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
// import './App.css'
import './App.css'
import Body from './components/Body.jsx'
import Buttons from './components/Buttons.jsx'
import Stars from './components/Stars.jsx'
import Films from './components/Films.jsx'

ReactDOM.createRoot(document.querySelector('body')).render(
  <React.StrictMode>
    <App></App>
    <Header></Header>
    <Body></Body>
    <Stars></Stars>
    <Buttons></Buttons>
    <Films></Films>
    
    
    
   
  </React.StrictMode>,
)
