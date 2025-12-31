import Hero from "./Home/Hero.tsx";
import Featured from "./Home/Featured.tsx";
import Latest from "./Home/Latest.tsx";
import Explore from "./Home/Explore.tsx";
import Footer from "./Home/Footer.tsx";

function Home() {
    return (
        <div className="Home" id='home'>
            <Hero/>
            <Featured/>
            <Explore/>
            <Latest/>
            <Footer/>
        </div>
    );
}

export default Home;