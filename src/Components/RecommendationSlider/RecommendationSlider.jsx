import React, { Component } from "react";
import styles from "./RecommendationSlider.module.scss";
import RecommendationText from "./RecommendationText";

export default class RecommendationSlider extends Component {
    render () {
        return (
           <div className={styles.recommendationSlider}>
               <RecommendationText />
           </div>
        )
    }
}