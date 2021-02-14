import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import About from "../About";
import TheService from "../TheService";
import Contact from "../Contact";


const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    render () {
        return (
            <>
                <Router>
                    <Home path="/"  />
                    <About path="about" />
                    <TheService path="service" />
                    <Contact path="contact" />
                    <NotFound default />
                </Router>
            </>
        );
    }
} 