// Components
import HeroContent from "./HeroContent"
import Navbar from "./Navbar"


const Hero = () => {

    return (
        <div className="hero"
        style={{ 
                backgroundImage: `url(/images/hero/background.png)`, backgroundPosition: `right 0 top 0`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '80% 95vh' 
            }}
        >
            <Navbar />
            <HeroContent />
        </div>
    )
}

export default Hero