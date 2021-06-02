import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../components/images/logo.png';
import favIcon from '../components/images/fav-icon.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import inicioIcon from '../components/images/inicio-icon.png';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'


const background = {
	backgroundColor: '#DB0C15'
};

const Navbarr = () => {
	return (
		<Navbar style={background} expand="lg">
			<div className="container d-flex justify-content-between">
				<NavLink exact to='/' activeClassName=' active home'>
					<Navbar.Brand >
						<img
							src={logo}
							width="150px"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</Navbar.Brand>
				</NavLink>
				<Nav className="justify-content-end" activeKey="/home">

					<Navbar.Collapse id="basic-navbar-nav">

						<DropdownButton id="dropdown-item-button" title="Categorías">
							<Dropdown.Item as="button"><NavLink exact to='/category/pantalones' activeClassName=' active category'>Pantalones</NavLink></Dropdown.Item>
							<Dropdown.Item as="button"><NavLink exact to='/category/remeras' activeClassName=' active category'>Remeras</NavLink></Dropdown.Item>
							<Dropdown.Item as="button"><NavLink exact to='/category/buzos' activeClassName=' active home'>Buzos</NavLink></Dropdown.Item>
						</DropdownButton>
						
						<Nav.Item>
							<NavLink exact to='/fav' activeClassName=' active favorites'>
								<Button className="mr-3" ><img src={favIcon} alt="favorit icon" width="23px" /></Button>{' '}
							</NavLink>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link exact to='/cart' activeClassName='active cart'>
								<CartWidget />
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link>
								<Button className="mr-3" ><img src={inicioIcon} alt="inicio icon" width="23px" /></Button>{' '}
							</Nav.Link>
						</Nav.Item>
					</Navbar.Collapse>
				</Nav>
			</div>
		</Navbar>
	);
};

export default Navbarr;

