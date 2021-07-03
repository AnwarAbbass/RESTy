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
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;