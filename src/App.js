import searchIcon from './imgs/searchIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={searchIcon} className="iconHeader" alt=""/>

          <div className="App-header-center">
            <img src={searchIcon} alt=""/>
            <div>
              <p>Inicio</p>
              <p>Produtos</p>
              <p>Contato</p>
              <p>Quem Somos</p>
            </div>
          </div>

          <img src={searchIcon} alt=""/>
      </header>
    </div>
  );
}

export default App;
