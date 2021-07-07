import React, { Component } from "react";
import styles from "./RecommendationText.module.scss";

export default class RecommendationText extends Component {
    render () {
        return (
           <div className={styles.recommendationTxt}>
               <p>{this.props.testimonialTxt}</p>
           </div>
        )
    }
}