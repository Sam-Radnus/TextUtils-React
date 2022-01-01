import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },5000);
  }
  const toggleMode=()=>{
     if(mode==='dark')
     {
       setMode('light');      //state variableoc
       document.body.style.backgroundColor='white';
       showAlert("light mode has been enabled","success");
       document.title='TextUtils-Light Mode';
      
     }
     else{
       setMode('dark');     //state variable
       document.body.style.backgroundColor='#343a40';
       showAlert("dark mode has been enabled","success");
       document.title='TextUtils-Dark Mode';
       
     }
  }
  return (
    <>
  
   <Navbar title="Sam1" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
   <div className="container my-3">
      <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode} heading="Enter the text to analyze below"/>
   </div>
  </>
  );
}

export default App;
