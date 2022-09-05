

const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="branding">
                <img src={'images/logo/logo-main.png'} alt="project logo" />
            </div>
            <div className="menu-options">
                <ul>
                    <li className="menu-selected">Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="search">
                <img src={'images/hero/search.png'} alt="search icon" />
            </div>
        </nav>
    )
}

export default Navbar