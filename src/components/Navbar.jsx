import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../components/images/logo.png';
import favIcon from '../components/images/fav-icon.png';

import inicioIcon from '../components/images/inicio-icon.png';
import CartWidget from './CartWidget';

const background = {
	backgroundColor: '#DB0C15'
};

const Navbarr = () => {
	return (
		<Navbar  style={background}  expand="lg">
			<div className="container d-flex justify-content-between">
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="150px"
						className="d-inline-block align-top"
						alt="logo"
					/>
				</Navbar.Brand>
				<Nav className="justify-content-end" activeKey="/home">

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav.Item>
							<Nav.Link>
								<Button className="mr-3" href="#"><img src={favIcon} alt="favorit icon" width="23px" /></Button>{' '}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link>
							<CartWidget />
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link>
								<Button className="mr-3" href="#"><img src={inicioIcon} alt="inicio icon" width="23px" /></Button>{' '}
							</Nav.Link>
						</Nav.Item>
					</Navbar.Collapse>
				</Nav>
			</div>
		</Navbar>
	);
};

export default Navbarr;
