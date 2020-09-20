import React, { Component } from "react";
import styles from "./TheService.module.scss";

export default class TheService extends Component {
    render() {
        return (
            <div className={styles.service} id="service">
                <h1>The Service</h1>
                    <h2>Initial Enquiry</h2>
                        <p>Following an email or telephone enquiry I’ll contact you to ask some brief details about your plans for the garden, timings and key requirements.
                        I will then arrange a site visit to walk through the garden area with you and your builder to gain a more detailed perspective. I may send you a questionnaire in advance to help you think through all the aspects of what you need or we can go through it at the site.
                        I usually make a small charge for this initial visit which can be off set against the final planting plan fee.</p>
                        <h2>The Planting Plan</h2>
                        <p>If you wish to go ahead , I’ll take measurements of the beds requiring planting  and then create an initial draft planting scheme.
                        We will then review the ideas together so that I can produce a final scheme
                        I show my schemes by season so you can see what the garden will look like at different time of the year.
                        Whilst I am happy to provide a planting scheme that can be managed as easily as you require, I do like to encourage your involvement in the future progression of your garden and will also provide suggestions for seasonal planting additions.</p>
                        <h2>The Plant purchase and planting day</h2>
                        <p>I can order in the plants as required via reputable nurseries, or provide a plant list for your gardener, builder or even yourself.
                        Some plants may need to be ordered at different times in order to reflect seasonality.
                        I am happy to work with you, your builder or your gardener on planting day to ensure your plants get the best possible start.
                        I am also available to visit garden centres with you if you would find that helpful whne adding seasonal plants to your new planning scheme.</p>
                        <h2>Rejuvenating an Existing Garden</h2>
                        <p>You may have inherited a garden whose layout you love, but which is looking tired and neglected.
                        Plants die off and fail to thrive in less than ideal conditions. Or the garden doesn’t suit your family needs.
                        The garden may not need a complete re-laying out but just a good refresh and input of new interest for you.
                        I am very happy to work with you in refreshing and reviving your existing garden.</p>
            </div>
        )
    }
}