import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ title, icon }) => {

    const onLogout = () => {
        console.log('logout');

    }

    return (
        <Navbar expand="lg" bg='primary' variant='dark' >
            <Navbar.Brand as={Link} to="/">
                <h2>
                    <i className={icon}></i> {title}
                </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {true ?
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

Header.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fa fa-id-card-o'
}

export default Header;
