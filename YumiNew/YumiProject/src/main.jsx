import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App.jsx'
// import Header from './components/Header.jsx'

// window.onload = function(){



//   const apiUrl = 'https://api.github.com/users/hadley/orgs'
//   function pullJson() {
//       fetch(apiUrl)
//       .then(response => response.json())
//       .then(responseData => {
//           console.log(responseData);
//       })
//   }
//   let newObj = responseData;
//   console.log(newObj);


//   // useEffect(() => {
//   //     pullJson()
//   // },[])
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)