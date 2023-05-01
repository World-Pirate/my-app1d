import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#08294e';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes> */}
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}> 
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
        {/* <About/> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;