import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainHome from './pages/MainHome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/LoginPage';
import Session from "react-session-api";

function App() {

  return (
    <Router>
      <>
      <Header/>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
