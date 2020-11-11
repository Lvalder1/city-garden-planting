import React, { Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from "./navigation.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
import websiteLogo from '../../Images/city-garden-planting-logo-large.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Containers/Home";
import About from "../../Containers/About";
import TheService from "../../Containers/TheService";
// import Inspiration from "../../Containers/Inspiration";
import Contact from "../../Containers/Contact";

export default class Navigation extends Component {
    render () {
        return (
            <>
            <Router>
                <Navbar bg="light" expand="sm" sticky="top" className={styles.nav}>
                    <Navbar.Brand className={styles.brand}>
                        <img src={websiteLogo} alt="websiteLogo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-0">
                        <Link to="/" className={styles.navlink}>HOME</Link>
                        <Link to="/about" className={styles.navlink}>ABOUT</Link>
                        <Link to="/service" className={styles.navlink}>THE SERVICE</Link>
                        {/* <Nav.Link href="inspiration">Inspiration</Nav.Link> */}
                        <Link to="/contact" v>CONTACT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/service">
                        <TheService />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            </>
        )
    }
}