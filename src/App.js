
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert] =  useState(null)

 /* const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')

  }*/

  const toggleMode =() =>{
   // removeBodyClasses();
    //document.body.classList.add('bg-'+cls)
    if(mode ==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");

    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      //document.title = 'AITA - Light Mode';

    }

  }

  const showAlert=(message,type)=>{

   setAlert({

    msg:message,
    type:type

   })

   setTimeout(() =>{
    setAlert(null);

   },3000);

  }
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
   <Switch>
      {/* ./users--->component 1
      //users/home--->compenent 2*/}
         <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         <Route exact path="/">
            <Textform showAlert={showAlert} heading="TextUtils -  Word Counter Character Counter" mode={mode} />
         </Route>
   </Switch>
    </div>
   </Router>
   </>
    
  );
}

export default App;
