import React from "react";
import './style.scss'
import logo from '../../image/logo.svg'


const ThankYou = () => {
    return (
        <>
            <div className='section'>
                <div className='header'>
                    <img
                        className='logo'
                        src={logo}
                        alt="logo"/>
                </div>
                <div className='content'>
                    <h1 className='title'>
                        Thank you for your purchase!<br/>
                        Our managers will contact you soon to discuss the details.<br/>
                        Your product will be delivered within 3-5 business days after filling out the brief.
                    </h1>
                    <p className='subtitle'>
                        Your credit card statement will show a charge from CLKBANK*
                    </p>
                    <div>
                        <h4>Refunds and Customer Support</h4>
                        <h4 style={{marginBottom: '-30px'}}>Refunds:</h4>
                        <p>All sales are final and no refund will be issued. Unless the refund was requested before the start date of the project.</p>
                        <p>For Product Support, please contact us <a className='link' href="#">HERE</a>.</p>

                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>
                    ClickBank is the retailer of this product. CLICKBANK&reg; is a registered trademark of Click Sales, Inc., a Delaware
                    corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank’s
                    role as retailer does not constitute an endorsement, approval or review of this product or any claim, statement or
                    opinion used in promotion of this product.
                </p>
            </div>
        </>
    )
}

export default ThankYou