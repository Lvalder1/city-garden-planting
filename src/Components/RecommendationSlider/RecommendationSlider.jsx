import React, { Component } from "react";
import styles from "./RecommendationSlider.module.scss";
import RecommendationText from "./RecommendationText";

export default class RecommendationSlider extends Component {
    render () {
        return (
           <div className={styles.recommendationSlider}>
               <RecommendationText 
                    testimonialTxt="Very good work" />
               <RecommendationText 
                    testimonialTxt="Very quick" />
               <RecommendationText 
                    testimonialTxt="Would recommend again" />
           </div>
        )
    }
}