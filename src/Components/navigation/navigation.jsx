import React, { Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from "./navigation.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
import websiteLogo from '../../Images/city-garden-planting-logo-new.png';

export default class Navigation extends Component {
    render () {
        return (
            <>
            <Navbar bg="light" expand="sm" sticky="top" className={styles.nav}>
                <Navbar.Brand className={styles.brand}>
                    <img src={websiteLogo} alt="websiteLogo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-0">
                    <Nav.Link href="home">HOME</Nav.Link>
                    <Nav.Link href="about">ABOUT</Nav.Link>
                    <Nav.Link href="service">THE SERVICE</Nav.Link>
                    {/* <Nav.Link href="inspiration">Inspiration</Nav.Link> */}
                    <Nav.Link href="contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}