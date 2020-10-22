import React, { Component } from "react";
import styles from "./Home.module.scss";
import ContactFooter from "../../Components/ContactFooter";
import img01 from "../../Images/img_01.png";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className={styles.home} id="home">
                <div className={styles.imgCenter}>
                    <img src={img01} alt="img_01"></img>
                </div>
                <h1>City Garden Planting</h1>
            </div>
            <ContactFooter />
            </>
        )
    }
}