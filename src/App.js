
import './App.css';
import Kosar from './components/public/Kosar';
import Cards from './components/public/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h1>Webáruház</h1>
      </header>
      <aside>
        <Kosar />
      </aside>
      <article className='container'>
        <Cards />
      </article>
      <footer>Készítette:Gipsz Jakab</footer>
    </div>
  );
}

export default App;
