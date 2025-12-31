import '../../styles/home.css';
import '../../styles/Home/Hero.css'
import Tag from "../../components/Tag.tsx";
function Hero() {
    return (
        <section className="Hero">
            <Tag tag="Welcome to Fine Finesse" />

            <h1 className="headline">
                Elevate Your Presence,<br />
                <span className="highlight">Refine Your Brand</span>
            </h1>

            <p className="subtext">
                Discover expert insights on modern etiquette, personal branding,
                and professional development. Learn how to present the best
                version of yourself with confidence, grace, and authenticity.
            </p>

            <div className="buttons-container">
                {/* CTA buttons later */}
            </div>
        </section>
    );
}

export default Hero;