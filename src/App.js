import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbarr from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';


// import ItemDetail from './components/ItemDetail';
// import CartWidget from './components/CartWidget';
// import Cart from './components/Cart';


function App() {
	return (


		<BrowserRouter>
			<body>
				<header>
					<Navbarr />
				</header>
				<Switch>
					<Route exact path='/'>
						<ItemListContainer />
						{/* <Home /> */}
					</Route>
					<Route path='/category/:id'>
						<ItemListContainer />
					</Route>
					<Route path='/item/:id'>
						<ItemDetailContainer />
					</Route>
					{/* <Route path='/cart'>
						<Cart />
					</Route> */}


				</Switch>

			</body>

		</BrowserRouter>

	);
}




export default App;



