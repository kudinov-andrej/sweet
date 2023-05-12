import './App.css';
import Header from './header/Header';
import Holidays from './Holidays';
import LoveBlock from './LoveBlock';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';


function App() {

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />
        <Navigation />
        <Promotion />
        <Holidays />
      </main>
    </div >
  );
}

export default App;
