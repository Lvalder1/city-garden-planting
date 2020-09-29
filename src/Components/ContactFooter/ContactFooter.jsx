import React, { Component } from "react";
import styles from "./ContactFooter.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export default class ContactFooter extends Component {
    render () {
        return (
            <div className={styles.contact} id="contactFooter">
                <div className={styles.email}>
                    <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className={styles.fontawesome} /><a href="mailto:cwvalder@gmail.com">cwvalder@gmail.com</a>
                </div>
                <div className={styles.instagram}>
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" className={styles.fontawesome} /><a href="https://www.instagram.com/carolynvalder/">instagram.com/carolynvalder/</a> 
                </div>
            </div>
        )
    }
}