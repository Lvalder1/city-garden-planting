import React, {Component} from 'react';
import styles from './Inspiration.module.scss';

export default class Inspiration extends Component {
    render () {
        return (
            <div className={styles.inspiration} id="inspiration">
                <h1>Inspiration</h1>
            </div>
        )
    }
}