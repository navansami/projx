// Components
import HeroContent from "./HeroContent"
import Navbar from "./Navbar"

const Hero = () => {

    return (
        <nav className="hero" >
            <Navbar />
            <HeroContent />
        </nav>
    )
}

export default Hero