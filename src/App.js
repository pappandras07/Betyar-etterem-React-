import React from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Fooldal from './components/Fooldal';
import Etlap from './components/Etlap';
import Asztalfoglalas from './components/Asztalfoglalas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/etlap" element={<Etlap />} />
        <Route path="/asztalfoglalas" element={<Asztalfoglalas />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;