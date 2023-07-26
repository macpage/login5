

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/LoginPage' element={<LoginPage></LoginPage>}></Route>
      </Routes>

     <Link to="/RegisterPage">Register</Link>
     <Link to="/LoginPage">Login</Link>
    </Router>
    
     
    </>
  )
}

export default App
