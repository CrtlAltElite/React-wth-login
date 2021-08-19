import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={{marginBottom:"20px"}}>
                <Container>
                    <Navbar.Brand href="/">FakeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        {this.props.token ? 
                        <>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
                        <Nav.Link as={Link} to="/page3">Page3</Nav.Link>
                        <Nav.Link as={Link} to="/example">Example</Nav.Link>
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>

                        </>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
