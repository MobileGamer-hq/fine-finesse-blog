
import {
    FiMail,
    FiSend,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiPhone,
    FiMapPin,
} from 'react-icons/fi';
import '../../styles/home.css';
import '../../styles/Home/Footer.css';

import Logo from '../../assets/Logo.png';

function Footer() {
    return (
        <footer>
            {/* Newsletter Section */}
            <section className="newsletter">
                <div className="newsletter-icon">
                    <FiMail />
                </div>

                <h2>Elevate Your Inbox</h2>
                <p>
                    Join our community of professionals dedicated to personal excellence.
                    Receive weekly insights, exclusive tips, and curated content on
                    etiquette, personal branding, and professional development.
                </p>

                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email address" />
                    <button>
                        Subscribe <FiSend />
                    </button>
                </div>

                <small>
                    We respect your privacy. Unsubscribe at any time.
                </small>
            </section>

            {/* Main Footer */}
            <section className="footer-main">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="logo-container">
                            <img src={Logo}/>
                        </div>
                        <p>
                            Helping individuals present the best version of themselves with
                            confidence, grace, and professionalism.
                        </p>

                        <div className="socials">
                            <div className='social-icon'>  <FiInstagram /> </div>
                              <div className='social-icon'>      <FiLinkedin /></div>
                                  <div className='social-icon'> <FiTwitter /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About Louise</li>
                            <li>Services</li>
                            <li>Training Programs</li>
                            <li>Coaching</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4>Categories</h4>
                        <ul>
                            <li>Modern Etiquette</li>
                            <li>Personal Branding</li>
                            <li>Career Advancement</li>
                            <li>Professional Growth</li>
                            <li>Lifestyle Polish</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4>Get in Touch</h4>
                        <ul className="contact">
                            <li>
                                <FiMail /> hello@finefinesse.com
                            </li>
                            <li>
                                <FiPhone /> +1 (234) 567-890
                            </li>
                            <li>
                                <FiMapPin /> New York, NY
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
