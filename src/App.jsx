import heroBg from './assets/images/hero-bg.png';
import lights from './assets/images/lights.png';
import './App.css';
import { getPosts, urlFor } from './client'
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage/ContactPage'

function App() {


  return (
    <div>
      <header>
        <h1> <a href="/">Placeholder Construction</a></h1>
        <a href="/#contact"> Contact Us </a>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
