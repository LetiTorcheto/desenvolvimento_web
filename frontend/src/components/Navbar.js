import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
//import '../../assets/css/custom-navbar.css';

function CustomNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="nav-link">Conexão Doadora</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav">
                            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="/catalogo" className="nav-link">Catálogo</Nav.Link>
                            <Nav.Link href='/cart' className="nav-link">Carrinho</Nav.Link>
                            <Nav.Link href='/profile' className="nav-link">Perfil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
