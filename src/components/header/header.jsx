import './header.scss';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <header>
            <h1>
                REST-Y
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link exactly to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/about-us">About us</Link> */}
                    </li>
                    <li>
                        <Link to="/histort">histort</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;