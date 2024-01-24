import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import CartWidget from '../CartWidget/CartWidget';

const NavBarComponent = () => {
    return (

        <div>
            <Navbar bg="secondary" data-bs-theme="dark">
                <Container style={{ width: "100vw" }}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/512/4437/4437625.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Fake STore </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Productos">Productos</Nav.Link>
                        <Nav.Link href="#SobreNosotros">Sobre Nosotros</Nav.Link>
                        <Form inline>
                        </Form>
                    </Nav>
                        <CartWidget/>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComponent