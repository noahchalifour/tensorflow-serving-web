import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';

function NavigationBar(props) {
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">Tensorflow Serving</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/models'>
                        <Nav.Link href="#home">Models</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;