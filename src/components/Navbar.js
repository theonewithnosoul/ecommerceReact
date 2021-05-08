import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbarr = () => {
	return (
		<Navbar bg="light" expand="lg">
			<div className="container d-flex justify-content-between">
				<Navbar.Brand href="#home">Roomer</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className = "justify-content-end" >
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Navbarr;
