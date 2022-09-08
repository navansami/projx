
// Components
import BrandCard from './BrandCard';
import Button from '../General/Button';

// Styles
import '../../css/herocontent.css';

const HeroContent = () => {

    return (
        // grid displays 3 columns
        <div className="hero-content_grid">

            
            {/* this will show the text content of the hero */}
            <div className="hero-content_text">
                <div className="text-motto">
                    Listen, Learn, Guide
                </div>
                <div className="text-title">
                    <h1>Realize your goals<br /><span className='text-accent'>And Live</span> as you wish</h1>
                </div>
                <div className="text-body">if you focus and want to realize your goals, both persual and professional, you are on the right track. Together we can do the rest; work on your self-awareness and prepare for the challenges of the future. 

                    <Button 
                        text={"Find out who they are"} 
                        customize={"btn btn-rounded btn-primary"}
                    />
                </div>
                
            </div>

            

            {/* display custom cards of images */}
            {/* possibility of adding a card component with image props */}
            <div className="hero-content_cards">
                <div className="cards">
                    <div className="cards-main">

                        <img src={'images/hero/ray-top.png'} alt="sparkling rays flat design" className='rays rays-1' />
                        <img src={'images/hero/Person-1.png'} alt="guy smiling and holding a jacket" className='person-1' />
                        <div className='overlay-1'></div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-main">
                        <div className='overlay-2'></div>
                        <img src={'images/hero/ray-down.png'} alt="sparkling rays flat design" className='rays rays-2' />
                        <img src={'images/hero/Person-2.png'} alt="guy smiling and holding a jacket" className='person-2' />
                    </div>
                </div>
            </div>
            
            
            {/* social media icons, should align with search icon above */}
            <div className="hero-content_social">
                <div className="red-line"></div>
                <div className="social-connect">
                    <img src={'images/hero/v-a.png'} alt="social media icon for linkedin" />
                    <img src={'images/hero/v-b.png'} alt="social media icon for youtube" />
                    <img src={'images/hero/v-c.png'} alt="social media icon for instagram" />
                </div>
                <div className="red-line"></div>
            </div>

            <BrandCard />
        </div>
    )
}

export default HeroContent