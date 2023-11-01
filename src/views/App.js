import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
// import Form from './Example/Form';
import ListTodo from './Todos/ListTodo';
// import Product from './Example/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

export default App;
