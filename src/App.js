import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
import About2 from './components/About2';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode, setMode]= useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark Mode Enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","success");
  }
}

  return (
    <>
    <Router>
    <Navbar name="Funk Word" sideName="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" mode={mode}>
    <Switch>
          <Route exact path="/about">
            <About2 />
          </Route>
          <Route path="/">
            <Textforms exact mode={mode}/>
          </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
