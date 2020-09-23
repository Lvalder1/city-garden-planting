import React, { Component } from "react";
import styles from "./ContactFooter.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export default class ContactFooter extends Component {
    render () {
        return (
            <div className={styles.contact} id="contactFooter">
                <a href="mailto:cwvalder@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className={styles.fontawesome} /></a>
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" className={styles.fontawesome} />  
            </div>
        )
    }
}