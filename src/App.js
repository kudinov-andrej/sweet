import './App.css';
import React from 'react';
import Header from './header/Header';
import Holidays from './Holidays';
import LoveBlock from './LoveBlock';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';
import PopularSet from './popularSet/PopularSet'

function App() {

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />
        <Navigation />
        <Promotion />
        <Holidays />
        <PopularSet />
      </main>
    </div >
  );
}

export default App;
