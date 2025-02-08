import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodingProfile from './components/CodingProfile';
import Fun from './components/FunSection';
function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/codingprofile" element={<CodingProfile />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
