import React, { Component } from "react";
import styles from "./Home.module.scss";
import ContactFooter from "../../Components/ContactFooter";
import img01 from "../../Images/img_01.png";
// import img02 from "../../Images/img_02.jpg";
// import img03 from "../../Images/img_03.jpg";
// import img04 from "../../Images/img_04.jpg";


export default class Home extends Component {
    render() {
        return (
            <div className={styles.home} id="home">
                <div className={styles.imgCenter}>
                    <img src={img01} alt="img_01"></img>
                </div>
                <h1>City Garden Planting</h1>
                {/* <div className={styles.middleImgs}>
                    <div className={styles.column}>
                        <a href={img02} target="_blank" rel="noopener noreferrer">
                            <img src={img02} alt="img_02"></img>
                        </a>
                    </div>
                    <div className={styles.column}>
                        <a href={img03} target="_blank" rel="noopener noreferrer">
                            <img src={img03} alt="img_03"></img>
                        </a>
                    </div>
                    <div className={styles.column}>
                        <a href={img04} target="_blank" rel="noopener noreferrer">
                            <img src={img04} alt="img_04"></img>
                        </a>
                    </div>
                </div> */}
                <ContactFooter />
            </div>
        )
    }
}