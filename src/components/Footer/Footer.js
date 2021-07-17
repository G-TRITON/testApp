import Logo from "../../assets/logo.png";
import FooterData from "./footerData";
import "./footer.css";

function Footer () {
    return (
        <footer id="footer">
            <div className="footerContainer">
                <div className="logoContainer" >
                    <img src={Logo} alt="" className="footerLogo"/>
                </div>
                <div className="footerContent">
                    <ul className="links contentFooter footerLinks">
                        {FooterData.map((link, i) => (
                            <li key={i}><a className="link footerLink" href={link.path}>{link.name}</a></li>
                        ))}
                    </ul>
                    <p className="contentFooter">copyright by 2021 Left&Right</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;