import './App.css';
import Header from './header/Header';
import LoveBlock from './LoveBlock';
import Navigation from './navigation/Navigation';
import Promotion from './Promotion'


function App() {

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />
        <Navigation />
        <Promotion />
      </main>
    </div >
  );
}

export default App;
