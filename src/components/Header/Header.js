import Logo from '../../assets/logo.png';
import Links from './headerData';
import { GiHamburgerMenu } from 'react-icons/gi';

import './header.css';


function Header () {

    return (
        <header id="header">
            <div>
                <img className="logo" src={Logo} alt="Logo" />
            </div>
            <ul className="links">
                {Links.map((link, i) => (
                    <li key={i}><a className="link" href={`#${link.path}`}>{link.name}</a></li>
                ))}
            </ul>
            <div className="btnGroup">
                <button className="btn btnSecondary" style={{ marginRight: '10px', marginTop: '10px' }}>Contact Us</button>
                    <GiHamburgerMenu className="menu" />
            </div>
            
        </header>
    );
}

export default Header;