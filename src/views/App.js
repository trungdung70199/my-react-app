import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
// import Form from './Example/Form';
import ListTodo from './Todos/ListTodo';
// import Product from './Example/product';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Todo app</p>
				<ListTodo />
				{/* <MyComponent />  */}
				{/*Shortcut type*/}
				{/* <Form /> */}
				{/* <MyComponent></MyComponent> */} {/* Full type */}
			</header>
		</div>
	);
}

export default App;
