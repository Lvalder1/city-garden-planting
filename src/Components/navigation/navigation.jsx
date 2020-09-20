import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./navigation.module.scss";
import 'bootstrap/dist/css/bootstrap.css' 

export default class Navigation extends Component {
    render () {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand>City Garden Planting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="service">The Service</Nav.Link>
                    <Nav.Link href="inspiration">Inspiration</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}