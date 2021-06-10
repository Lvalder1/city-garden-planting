import React, { Component } from "react";
import styles from "./Home.module.scss";
import ContactFooter from "../../Components/ContactFooter";
import img01 from "../../Images/img_01.png";
import websiteLogo from "../../Images/city-garden-planting-logo-large.png"
import RecommendationSlider from "../../Components/RecommendationSlider";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className={styles.home} id="home">
                <div className={styles.imgCenter}>
                    <img src={img01} alt="img_01"></img>
                </div>
                <div className={styles.logo}>
                    <img src={websiteLogo} alt="website_Logo"></img>
                </div>
                {/* <RecommendationSlider /> */}
            </div>
            <footer className={styles.contactFooter}>
                <ContactFooter />
            </footer>
            </>
        )
    }
}