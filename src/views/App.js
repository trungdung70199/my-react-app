// import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import Form from './Example/Form';
import ListTodo from './Todo/ListTodo';
// import Product from './Example/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
		<div className="App">
			<header className="App-header">
				<Nav />
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>Todo app</p>
				
				{/* <MyComponent />  */}
				{/*Shortcut type*/}
				{/* <MyComponent></MyComponent> */} {/* Full type */}
				<Switch>
					{/* Path:  */}
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/todo">
						<ListTodo />
					</Route>
					<Route path="/about">
						<Form />
					</Route>
				</Switch>
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
		</BrowserRouter>
	);
}

export default App;
