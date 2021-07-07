import React, { Component } from "react";
import styles from "./RecommendationSlideshow.module.scss";
import RecommendationText from "./RecommendationText";

export default class RecommendationSlideshow extends Component {
    render () {
        return (
           <div className={styles.recommendationSlideshow}>
               <div className={styles.slideshowSlider}>
                    <div className={styles.slide}>
                        <RecommendationText 
                                testimonialTxt="Very good work" />
                    </div>
                    <div className={styles.slide}>
                        <RecommendationText 
                                testimonialTxt="Very quick" />
                    </div>
                    <div className={styles.slide}>
                        <RecommendationText 
                                testimonialTxt="Would recommend again" />
                    </div>
               </div>
           </div>
        )
    }
}