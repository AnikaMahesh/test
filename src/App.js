import logo from './logo.svg';
import './App.css';
import './App.css'
import Navbar from './navbar' 
function App() {
  const makebuttons = [0,1,2,3].map(x=><button>{x}</button>)
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar type='footer'/>
      {makebuttons}
    </div>
  );
}

export default App;
