import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import Form from './Example/Form';
// import Product from './Example/product';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>react basic</p>
				<MyComponent /> {/*Shortcut type*/}
				<Form />
				{/* <MyComponent></MyComponent> */} {/* Full type */}
			</header>
		</div>
	);
}

export default App;
