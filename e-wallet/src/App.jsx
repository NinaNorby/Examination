import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import AddCardPage from './pages/AddCardPage/AddCardPage'
import Footer from './components/Footer/footer'
import Header from './components/Header/Header'
import NavigationsBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <>
      {/* Router omsluter hela aplikationen . Behöver inte skriva BrowserRouter då jag har döpt om den i import */}
      <Router>
        <Header />
        <NavigationsBar />
        {/* Routes och Route hanterar vilka sidor som ska visas beroende på URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCardPage />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
