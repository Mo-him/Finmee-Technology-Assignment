import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import TopSection from './components/TopSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopSection/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
