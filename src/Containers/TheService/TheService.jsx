import React, { Component } from "react";
import styles from "./TheService.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling} from '@fortawesome/free-solid-svg-icons';
import ContactFooter from "../../Components/ContactFooter";

// let x = window.matchMedia("(mix-width: 600px)").matches; 
// let b = window.matchMedia('(  max-width:       +600px)').media;

export default class TheService extends Component {
    render() {
        // console.log(x);
        // console.log(b);
        if (window.matchMedia("(max-width: 600px)").matches) {
            return (
                <div>hello</div>
                );
        } else {
            return (  
                <div className={styles.service} id="service">
                    <h1>The Service</h1>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>Initial Enquiry</h2>
                                <p>Following an email enquiry, I’ll contact you to ask some brief details about your plans for the garden, timings and key requirements.
                                I will then arrange a site visit to walk through the garden area with you and your builder/landscaper (if required) to gain a more 
                                detailed perspective. I may send you a questionnaire in advance to help you think through all the aspects of what you need or we can go through
                                it at the site.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>Garden Brief Summary</h2>
                                <p>Following the visit, I’ll send you a summary of your requirements, with details of my fees and options for any additional services.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>The Planting Plan</h2>
                                <p>If you wish to go ahead, I’ll pay a further visit to take detailed measurements of the beds requiring planting and then create an initial draft planting scheme, 
                                based on your preferred style.
                                <br></br>We will then review the ideas together so that I can produce a final scheme. 
                                <br></br>Occasionally garden schemes, photographs and the annual show gardens can sometimes cause confusion as they display plants that normally would not 
                                be in season or at their best at the same time. Whilst all gardens will have their peak moment, I also show my schemes by season so you can see what the garden will 
                                look like at different times of the year.
                                <br></br>Whilst I am happy to provide a planting scheme that can be managed as easily as you require, I do like to encourage your involvement in the future 
                                progression of your garden and will also provide suggestions for seasonal planting additions.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>The Plant Purchase and Planting Day</h2>
                                <p>Once the Planting Plan is agreed I will produce a full plant list which either I can order in for you or provide for yourself, your gardener,
                                or your builder to follow on with. Bear in mind that some plants may need to be ordered at different times in order to reflect seasonality, 
                                so planting may need to be undertaken in stages.
                                <br></br>I am happy to work with you, your builder or your gardener on planting and delivery day to ensure your plants are correctly positioned 
                                and get the best possible start.
                                <br></br>I am also available to visit local garden centres with you if you would find that helpful when adding seasonal plants to your new planning 
                                scheme.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>Rejuvenating an Existing Garden</h2>
                                <p>You may have inherited a garden whose layout you love, but which is looking tired and neglected. Plants die off and fail to thrive in less than 
                                ideal conditions. Borders become congested and lose their flow. Or the garden may no longer suit your current requirements and needs a review.The 
                                garden may not need a complete re-laying out but just a good refresh and input of new plant interest for you.
                                <br></br>I am very happy to work with you in refreshing and reviving your existing garden.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>Maintaining the garden through the seasons</h2>
                                <p>All gardens evolve over the seasons. Some plants may outgrow their space, others may fail to thrive due to inclement weather or damage by 
                                predators or are affected by a neighbour’s renovations. I’m happy to provide an update service during the gardening calendar to fill gaps, 
                                revive the colour mix or add in annuals.</p>
                        </div>
                    </div>
                    <div className={styles.iconTextBox}>
                        <div className={styles.iconBox}>
                            <FontAwesomeIcon icon={faSeedling} size="5x"></FontAwesomeIcon>
                        </div>
                        <div className={styles.textBox}>
                            <h2>Garden Centre and Nursery</h2>
                                <p>You may just feel a bit daunted when visiting a garden centre or nursery to add in seasonal planting and would appreciate a guiding hand. I am 
                                happy to accompany clients on plant purchase expeditions in the west London area.</p>
                        </div>
                    </div>
                    <ContactFooter />
                </div>
            );
        }
    }
}








          


    
           