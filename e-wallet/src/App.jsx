import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavigationsBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage/HomePage';
import AddCardPage from './pages/AddCardPage/AddCardPage';
import CardDetailPage from './pages/CardDetailPage/CardDetailPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

function App() {
  const theme = useSelector((state) => state.theme.theme); // Hämtar temat från Redux. jag har omfamnat hel appen i en div och satt klassnamnet till temat som hämtas från Redux för att ändra temat för hela appen. 

  return (
    <div className={theme}> 
      <Router>
        <Header />
        <NavigationsBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCardPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
