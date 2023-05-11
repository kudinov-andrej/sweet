import './App.css';
import Header from './header/Header';
import LoveBlock from './LoveBlock'
import Navigation from './navigation/Navigation'



function App() {

  console.log("я работаю")

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />
        <Navigation />
      </main>
    </div >
  );
}

export default App;
