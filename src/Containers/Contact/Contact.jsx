import React, { Component } from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import websiteLogo from '../../Images/city-garden-planting-logo-large.png';

export default class Contact extends Component {
    render () {
        return (
            <>
            <div className={styles.contact} id="contact">
                <div className={styles.centreDiv}>
                    <img src={websiteLogo} alt="websiteLogo"></img>
                    <div className={styles.contactVia}>
                        <p>If you would like to enquire about any of these services, do please email me at:</p>
                    </div>
                    <div className={styles.email}>
                        <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.fontawesome} /><a href="mailto:cwvalder@gmail.com" id={styles.contactEmail}>cwvalder@gmail.com</a>
                    </div>
                    <div className={styles.instagramFooter}>
                        <div className={styles.instagram}>
                            <FontAwesomeIcon icon={faInstagramSquare} className={styles.fontawesome} /><a href="https://www.instagram.com/carolynvalder/" id={styles.contactInstagram}>instagram.com/carolynvalder/</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}></div>
            </>
        )
    }
}