import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Starter from './components/Starter/Starter';
import About from './components/About/About';
import Morals from './components/Morals/Morals';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Starter/>
      <About/>
      <Morals/>
      <Footer/>
    </Router>
  );
}

export default App;
