import React, { Component } from "react";
import styles from "./Home.module.scss";


export default class Home extends Component {
    render() {
        return (
            <div className={styles.home} id="home">
                    <div className={styles.landingimg}>
                        <div className={styles.centeredtxt}>City Garden Planting</div>
                    </div>
            </div>
        )
    }
}