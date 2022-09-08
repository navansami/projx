// Styles
import '../../css/navbar.css';

const Navbar = () => {

    return(

        <nav className='nav'>
            
            <div className="nav-branding">
                <img src={'images/logo/logo-main.png'} alt="project logo" />
            </div>

            <div className="nav-options">
                <ul className="list">
                    <li className="list-options selected">Home</li>
                    <li className="list-options">About Us</li>
                    <li className="list-options">Service</li>
                    <li className="list-options">Contact</li>
                </ul>
            </div>

            <div className="nav-addons">
            <img src={'images/hero/search.png'} alt="search icon" />
            </div>
        </nav>
    )
}

export default Navbar