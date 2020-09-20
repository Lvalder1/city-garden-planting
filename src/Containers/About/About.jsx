import React, { Component } from "react";
import styles from "./About.module.scss";

export default class About extends Component {
    render() {
        return (
            <div className={styles.about}>
                <h1 id="about">City Garden Planting – Carolyn Valder</h1>
                <p>I have lived and gardened in the same garden in West London for over 33 years.
                    As with most gardens it has evolved to suit family needs over the years, 
                    providing me with invaluable experience in working with a tricky North facing site.</p>
                <p>Over those years my long narrow city garden has evolved from overgrown grassy plot via 
                    cricket and football pitch to a tentative garden design and finally to a much loved leafy, 
                    herbaceous hideaway. I specialise in informal planting aiming to make your small garden appear 
                    long, secret and magical.</p>
                <p>I would not dare to add up the amount wasted on desirable, but unsuitable plants.</p>
                <p>Having produced garden planting schemes for friends and family over many years I 
                    am now providing garden planting services within the West London area.
                    I work with homeowners, local architects and landscape design builders to provide 
                    planting schemes to suit the lifestyle and personality of the homeowners.
                    My aim is to provide you with a tranquil haven that works with your lifestyle.</p>
            </div>
        )
    }
}