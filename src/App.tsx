import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import SignUp from './components/sign-up/SignUp'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Menu/>} />
        <Route path="login" element={ <SignUp/> } />
      </Routes>
    </div>
  );
}

export default App;
