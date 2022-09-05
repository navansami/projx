
const HeroContent = () => {

    return (
        <div className="heroContent">
            <div className="intro">
                <p className="motto">
                    Listen, Learn, Guide
                </p>
                <h1>Realize your goals</h1>
                <h1><span className="text-accent">And Live</span> as you wish</h1>
                <p className="intro-info">
                    if you focus and want to realize your goals, both persual and professional, you are on the right track. Together we can do the rest; work on your self-awareness and prepare for the challenges of the future.
                </p>
                <button className="btn btn-round">Find out who they are</button>
            </div>
            <div className="person1">
                <img src={'images/hero/ray-top.png'} className="ray1" alt="rays facing up" />
                <img src={'images/hero/Person-1.png'} alt="guy smiling" />
                <div className="card"></div>
            </div>
            <div className="person2">
                <img src={'images/hero/Person-2.png'} alt="lady wearing a mask" />
                <img src={'images/hero/ray-down.png'} className="ray2" alt="rays facing down" />
                <div className="card">
                </div>
            </div>
            <div className="social">
                <div className="red-line"></div>
                <div className="social-box">
                <img src={'images/hero/v-a.png'} alt="social media badges" />
                <img src={'images/hero/v-b.png'} alt="social media badges" />
                <img src={'images/hero/v-c.png'} alt="social media badges" />
                </div>
            </div>
            
        </div>
    )
}

export default HeroContent