import React, { Component } from "react";
import styles from "./About.module.scss";
import ContactFooter from "../../Components/ContactFooter";
import img02 from "../../Images/img_02.jpg";
import img03 from "../../Images/img_03.jpg";
import img04 from "../../Images/img_04.jpg";


export default class About extends Component {
    render() {
        return (
            <>
            <div className={styles.about}>
                <div className={styles.middleImgs}>
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
                </div>
                    <div className={styles.aboutTxt}>
                        <h1 id="about">City Garden Planting</h1>
                        <p>I have lived in, and gardened in the same garden, in west London for over 33 years. As with most gardens, it has evolved to suit family needs over time, 
                        from an overgrown grassy plot, via cricket and football pitch to a tentative garden design and finally to a much loved, leafy, herbaceous hideaway.
                        Working over so many years   with a tricky, north facing, long and narrow site has provided me with invaluable experience in choosing the right plants for each 
                        area of the garden.</p>

                        <br></br><p>Having produced garden planting schemes for friends and family over many years I am now offering planning and design services within the west London area, 
                        whilst I undertake a formal design course at Capel Manor in Regents Park. I work with homeowners, local architects and landscape design builders to provide
                        planting schemes to suit your lifestyle, taste and personality. I specialise in informal planting aiming to make a small garden appear longer, secretive and magical.</p>

                        <br></br><p>My aim is to provide you with a tranquil, manageable haven that works for you, whilst hopefully encouraging you to have a new enthusiasm for your own
                        gardening creativity. You may wish to only be involved in a small part of maintaining your garden - planting bulbs, potting up planters or adding in some seasonal 
                        updates – I am happy to help build your confidence in all of these aspects.</p>
                    </div>
            </div>
            <ContactFooter />
            </>
        )
    }
}