import Layout from './Components/Layout';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Rapport from './Pages/Rapport.jsx';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="rapport" element={<Rapport />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</Router>
  );
}

export default App;
