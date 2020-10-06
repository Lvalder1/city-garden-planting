import React, {Component} from 'react';
// import PhotoGallery from "../../Components/PhotoGallery";
import styles from './Inspiration.module.scss';
import ContactFooter from "../../Components/ContactFooter";

export default class Inspiration extends Component {
    render() {
        return (
        <div className={styles.inspiration}>
            {/* <PhotoGallery /> */}
            <ContactFooter />
        </div>
        )
    }
}