import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import NavigationsBar from "./components/NavigationBar/NavigationBar";
import Footer from './components/Footer/footer'
import HomePage from "./pages/HomePage/HomePage";
import AddCardPage from './pages/AddCardPage/AddCardPage'
import CardDetailPage from './pages/CardDetailPage/CardDetailPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
function App() {

  // i cards ska samtliga kort sparas. arrayen kommer att hålla alla kort som användaren lägger till
  const [cards, setCards] = useState([]);
  const [theme, setTheme] = useState('light');
  return (
    <>
    <div className={theme}>
      {/* Router omsluter hela aplikationen . Behöver inte skriva BrowserRouter då jag har döpt om den i import */}
      <Router>
        <Header />
        <NavigationsBar />
        {/* Routes och Route hanterar vilka sidor som ska visas beroende på URL */}
        <Routes>
          {/* // card setCards skickas som props till HomePage och AddCardPage */}
          <Route path="/" element={<HomePage cards={cards} setCards={setCards} />} />
          <Route path="/addcard" element={<AddCardPage cards={cards} setCards={setCards} />} />
          <Route path="/card/:id" element={<CardDetailPage cards={cards} setCards={setCards} />} />

          <Route path="/settings" element={<SettingsPage cards={cards} setCards={setCards} setTheme={setTheme} />} />
        </Routes>
        <Footer />
      </Router>
    
      </div></>
  )
}

export default App
