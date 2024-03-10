import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import LandingPage from './pages/landing/landing.page'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
