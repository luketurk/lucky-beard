import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import LandingPage from './pages/landing/landing.page'
import DemoRequestPage from './pages/contact/contact-us.page';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<DemoRequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
