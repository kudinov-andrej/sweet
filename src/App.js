import './App.css';
import Header from './Header';

function App() {

  console.log("я работаю")

  return (
    <div className="App">
      < Header />
      <main className='page'>
        <section className='love'>
          <div className='love__img'>
            <div className='love__img-group love__img-group_tupe_one'></div>
            <div className='love__img-group love__img-group_tupe_two'></div>
            <div className='love__img-group love__img-group_tupe_three'></div>
            <div className='love__img-group love__img-group_tupe_four'></div>
            <div className='love__img-group love__img-group_tupe_five'></div>
            <div className='love__img-group love__img-group_tupe_six'></div>
            <div className='love__img-group love__img-group_tupe_seven'></div>
            <div className='love__img-group love__img-group_tupe_eight'></div>
            <div className='love__img-group love__img-group_tupe_nine'></div>
            <div className='love__img-group love__img-group_tupe_ten'></div>
            <div className='love__img-group love__img-group_tupe_eleven'></div>
            <div className='love__img-group love__img-group_tupe_twelve'></div>








          </div>
          <div className='love__block'>
            <div className='love__exlips love__exlips_type_one'></div>
            <div className='love__exlips love__exlips_type_two'></div>
            <div className='love__exlips love__exlips_type_three'></div>
            <div className='love__exlips love__exlips_type_four'></div>
            <h1 className='love__name'>Macaronshop</h1>
            <p className='love__text-name'>Since 2023</p>
            <h2 className='love__title'>Настоящая любовь</h2>
            <p className='love__text'>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;
