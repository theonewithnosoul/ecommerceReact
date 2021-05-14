
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbarr from './components/Navbar';

function App() {
	return (
		<body>
			<header>
				<Navbarr />
			</header>
			<ItemListContainer buyButton=' Comprar '/>
		</body>

	);
}




export default App;



