import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../components/images/logo.png';
import favIcon from '../components/images/fav-icon.png';

import inicioIcon from '../components/images/inicio-icon.png';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
// import Form from 'react-bootstrap/Form';

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
						{/* <Nav.Item>
							<Nav.Link>
								<Form.Select aria-label="Default select example">
									<option>Open this select menu</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Nav.Link>
						</Nav.Item> */}
						<Nav.Item>
							<NavLink exact to='/fav' activeClassName= ' active favorites'>
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

