import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHeader } from '../Store/headerSlice';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const isOpen = useSelector(state => state.header.isOpen);
    const dispatch = useDispatch();
    return (
        <header className={`app-header ${isOpen ? 'open' : ''}`}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/about">Nirina VELOSONINA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => dispatch(toggleHeader())}/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/about">À propos</Nav.Link>
                            <Nav.Link as={Link} to="/projets">Projets</Nav.Link>
                            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
