import React, { Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from "./navigation.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
import websiteLogo from '../../Images/city-garden-planting-logo-large.png';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    return (
      <li className={styles[liClassName]}>
        <a href={props.path}>
          {props.name}
          {(props.path === pageURI)}
        </a>
      </li>
    );
  }

export default class Navigation extends Component {
    render () {
        return (
                <Navbar expand="sm" sticky="top" className={styles.navbar}>
                    <Navbar.Brand className={styles.brand}>
                        <img src={websiteLogo} alt="websiteLogo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-0">
                        <NavItem path="/" name="HOME" />
                        <NavItem path="/about" name="ABOUT" />
                        <NavItem path="/service" name="THE SERVICE" />
                        <NavItem path="/contact" name="CONTACT" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}