import React, { Component } from "react";
import Home from "../Containers/Home";
import About from "../Containers/About";
import TheService from "../Containers/TheService";
import Inspiration from "../Containers/Inspiration";
import Contact from "../Containers/Contact";
import Sitemap from "../sitemap.xml"
import { Router, Redirect } from "@reach/router";

export default class Routes extends Component {
    render() {
        return (
                <Router>
                    <Redirect noThrow from="/" to="home" />
                    <Home path="home" />
                    <About path="about" />
                    <TheService path="service" />
                    <Inspiration path="inspiration" /> 
                    <Contact path="contact" />
                    <Sitemap path="sitemap" />
                </Router>
                
        );
    }
}
