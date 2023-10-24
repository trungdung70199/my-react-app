import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
/*
2 components: class component / function component (function, arrow)
class component: JSX -> HTML + JS
*/
function App() {
  // Co the write function theo cach const App() => {}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
        <MyComponent /> {/*Shortcut type*/}
        {/* <MyComponent></MyComponent> */} {/* Full type */}
      </header>
    </div>
  );
}

export default App;
