import React, { Component } from "react";
import styles from "./Home.module.scss";


export default class Home extends Component {
    render() {
        return (
            <div className={styles.home} id="home">
                <h1>Home</h1>
            </div>
        )
    }
}