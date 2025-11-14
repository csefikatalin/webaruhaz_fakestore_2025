import "./App.css";
import Kosar from "./components/public/Kosar";
import Cards from "./components/public/Cards";
import Urlap from "./components/admin/Urlap";


function App() {
  return (
    <div className="App row ">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <section>
      
          <Urlap />
      
      </section>
      <article className="container col-lg-8 col-md-6 p-5 ">
        <Cards />
      </article>
      <aside className="col-lg-4 col-md-6 p-5">
        <Kosar />
      </aside>
      <footer>Készítette:Gipsz Jakab</footer>
    </div>
  );
}

export default App;
