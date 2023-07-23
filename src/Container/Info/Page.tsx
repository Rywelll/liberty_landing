import React from "react";
import logo from "../../image/logo.svg";
import footprint from '../../image/Frame206.png'
import lock from '../../image/Frame207.png'
import world from '../../image/Frame208.png'
import pay from '../../image/Frame209.png'
import over from '../../image/Frame210.png'
import success from '../../image/Frame211.png'
import privacy from '../../image/Frame22.png'
import screenShot1 from '../../image/ScreenShot1.png'
import screenShot2 from '../../image/ScreenShot2.png'
import './style.scss'



const Page = () => {

    const scrollToBlock = (blockId: string) => {
        const targetBlock = document.querySelector(`#${blockId}`);
        if (targetBlock) {
            targetBlock.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className='section'>
                <div className='header'>
                    <img
                        className='logo'
                        src={logo}
                        alt="logo"/>
                    <nav className='nav'>
                        <a className='nav_link' href="#!" onClick={() => scrollToBlock("Pricing")}>Pricing</a>
                        <a className='nav_link' href="#!" onClick={() => scrollToBlock("Works")}>Our works</a>
                        <a className='nav_link' href="#!" onClick={() => scrollToBlock("Testimonials")}>Testimonials</a>
                        <a className='nav_link' href="#!" onClick={() => scrollToBlock("Products")}>Products</a>
                    </nav>
                </div>
                <div className='content'>
                    <div>
                        <h1 className='title'>
                            Do you want to get highly-converting HTML5 banner ads package within 3-5 business days?
                        </h1>
                        <p className='subtitle'>
                            Boost your campaign now with our package deal: a uniquely designed <br/>
                            HTML5 banner ad, adapted for any platform, featuring 25 different sizes! <br/>
                            Stand out and captivate your audience today!
                        </p>
                        <button className='btn'>
                            Buy Now!
                        </button>
                    </div>
                    <div className='context'>
                        <h3 className='title_context'>
                            We Feel Your Pain:
                        </h3>
                        <ul className='text_list'>
                            <li><span className='selected_text'>Long waits</span> for late designs, cost time, and upset clients.</li>
                            <li>Struggling with <span className='selected_text'>many ad platform rules</span> feels like a losing battle.</li>
                            <li>When needed the most, <span className='selected_text'>design teams vanish.</span></li>
                        </ul>
                    </div>
                    <h3 className='title_liberating_change'>If these challenges hit close to home, it's high time for a liberating change.</h3>
                    <div className='liberating_change'>
                        <div className='text_liberating_change'>
                            <h3>
                                Welcome to Liberty.space - Your guide in the banner ad world.
                            </h3>
                            <ul>
                                <li>Enjoy <span className='selected_text_liberating_change'>quick design delivery</span> that saves time and keeps campaigns moving.</li>
                                <li><span className='selected_text_liberating_change'>No more tech problems</span>, our experts make perfect ads for every platform.</li>
                                <li>With our <span className='selected_text_liberating_change'>constant service</span>, you'll never be left with unanswered questions or unmet requests.</li>

                            </ul>
                        </div>
                        <img className='img_liberating_change' src={footprint} alt="footprint"/>
                    </div>
                    <div className='liberating_change'>
                        <img className='img_liberating_change' src={lock} alt="lock"/>
                        <div className='text_liberating_change'>
                            <h3>
                                Discover personalization power - meeting your client's unique needs.
                            </h3>
                            <ul>
                                <li>We make designs that  <span className='selected_text_liberating_change'>align with your clients' needs and goals.</span></li>
                                <li>Your client's ads will outdo competitors due to our  <span className='selected_text_liberating_change'>careful analysis</span> and trendy designs.</li>
                                <li>Get  <span className='selected_text_liberating_change'>two free revisions</span>, ensuring a perfect final result.</li>
                            </ul>
                        </div>
                    </div>
                    <h3 className='title_liberating_change'>A limited-time deal - Great value, amazing results.</h3>
                    <div className='context' id="Pricing">
                        <h3 className='title_big'>
                            For just $499, you get:
                        </h3>
                        <ul className='text_list'>
                            <li>A custom key visual design matching your client's brand.</li>
                            <li>25 resized HTML5 banner ads to attract people and boost involvement.</li>
                        </ul>
                    </div>
                    <h4>Boost your clients' returns, surpass their hopes, and stay within your budget.</h4>
                    <div className='liberating_change'>
                        <div className='text_liberating_change'>
                            <h3 className='text_world_liberating_change'>Join the Ranks of the Elite – Experience Success Like Never Before</h3>
                            <p className='subtext_partners_liberating_change'>Our partners:</p>
                            <ul>
                                <li>HotSpot Shield</li>
                                <li>UltraVPN</li>
                                <li>Shook & Stone</li>
                                <li>Ellodi</li>
                            </ul>
                            <p>They trust us, see benefits, and you can too!</p>
                        </div>
                        <img className='img_liberating_change' src={world} alt="world and planet"/>
                    </div>
                    <h3 className='title_big' id="Works">
                        Our works
                    </h3>
                    <div className='our_works'>
                        <img className='img_our_works_change' src={pay} alt="pay nothing"/>
                        <img className='img_our_works_change' src={over} alt="we have recovered"/>
                        <img className='img_our_works_change' src={success} alt="success date"/>
                    </div>
                    <img className='img_privacy_change' src={privacy} alt="privacy is one click away"/>
                    <h3 className='title_big' id="Testimonials">
                        Don't Just Take Our Word for It – Get Inspired by Our Clients' <br/> Success Stories
                    </h3>
                    <img className='img_our_works_change' src={screenShot1} alt="we have recovered"/>
                    <img className='img_our_works_change' src={screenShot2} alt="success date"/>
                    <h3 className='title_liberating_change'>Behind the Scenes at Liberty.space – Our Methodical, <br/> Results-Driven Work Process</h3>
                    <div className='context'>
                      <p className='text_work_process'>
                          Choosing Liberty.space means joining a dedicated team focused on your success. Our process guarantees top results:
                          <br/> <br/>
                          Step 1: Understand Your Business: We study your client's business, unique selling points, target group, and message to make effective designs.
                          <br/> <br/>
                          Step 2: Competitor Analysis: We study your client's rivals to know what works in their field. This helps us make banner ads that beat the competition.
                          <br/> <br/>
                          Step 3: Create Key Visuals: With knowledge and insight, we make multiple key visuals that balance your client's brand and audience's tastes.
                          <br/> <br/>
                          Step 4: Review and Revisions: We present designs for feedback. We offer two free revisions to refine the design until it matches your vision.
                          <br/> <br/>
                          Step 5: Adaptation and Resizing: Our team adapts and resizes the final design for each platform. We ensure each banner is perfect and ready.
                          <br/> <br/>
                          Step 6: Delivery and Support: We deliver on time and offer continuous support. We're there for you, helping you impress clients and get great results.
                      </p>
                    </div>
                    <div className='context'>
                        <h3 className='title_liberating_change'>Don't let bad ads stop you. Boost your ads with <br/> Liberty.space and take off towards success.</h3>
                        <button className='btn'>
                            Yes, I'm Ready to Elevate My Banner Ads!
                        </button>
                    </div>
                    <h3 className='title_liberating_change'>Products</h3>
                    <div className='product_content' id="Products">
                        <div className='product_card'>
                            <p className='product_text'>Key visual design + Extended Package of HTML5 Banners(up to 25 resizes) = 499$</p>
                        </div>
                        <div className='product_card'>
                            <p className='product_text'>Key visual design + Extended Package of HTML5 Banners(up to 25 resizes) = 499$</p>
                        </div>
                        <div className='product_card'>
                            <p className='product_text'>Key visual design + Extended Package of HTML5 Banners(up to 25 resizes) = 499$</p>
                        </div>
                    </div>
                    <div>
                        <h4>Refunds and Customer Support</h4>
                        <h4 style={{marginBottom: '-20px'}}>Refunds:</h4>
                        <p>All sales are final and no refund will be issued. Unless the refund was requested before the start date of the project.</p>
                        <p style={{marginBottom: '-20px'}}>For Product Support, please contact the vendor <a className='link' href="#">HERE</a>.</p>
                        <p>For Order Support, please contact ClickBank <a className='link' href="#">HERE</a>.</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>
                    ClickBank is the retailer of this product. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank’s role as retailer does not constitute an endorsement, approval or review of this product or any claim, statement or opinion used in promotion of this product. <br/>
                    <br/>
                    Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
                    Testimonials, case studies, and examples found on this page are results that have been forwarded to us by users of "HTML5 Banner Package" products and related products are not intended to represent or guarantee that anyone will achieve the same or similar results.
                </p>
            </div>
        </>
    )
}

export default Page