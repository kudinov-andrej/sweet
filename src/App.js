import './App.css';
import Header from './Header';
import LoveBlock from './LoveBlock'





function App() {

  console.log("я работаю")

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <LoveBlock />

      </main>
    </div >
  );
}

export default App;
