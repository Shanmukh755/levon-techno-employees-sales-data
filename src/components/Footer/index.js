import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './index.css';

const Footer = ({ isClickToggle }) => {
    const footerBg = isClickToggle ? "footer-container dark" : "footer-container light";
    const followSectionBg = isClickToggle ? "follow-section dark" : "follow-section light";
    const textColor = isClickToggle ? "dark-text" : "light-text";

    return (
        <>
            <div className={footerBg} id='about'>
                <h1 className={`footer-head ${textColor}`}>About Section</h1>
                <p className={`footer-data ${textColor}`}>
                    This team sales report application provides comprehensive insights 
                    into user activity time, team sales data, and team demographics. It 
                    tracks the amount of time each user spends on various activities, 
                    allowing you to analyze patterns to improve productivity and identify 
                    trends. You can monitor monthly and quarterly sales figures, visualize 
                    sales performance through charts and graphs, and compare sales data 
                    across different team members and time periods. Additionally, the application 
                    provides demographic information such as age, gender, and location of team 
                    members, enabling you to utilize these insights to tailor marketing strategies 
                    and improve team management. All this data can be viewed and analyzed in 
                    real-time through our interactive dashboard, designed to help you make informed 
                    decisions and drive team success.
                </p>
            </div>
            <div className={followSectionBg} id="followUs">
                <h1 className={`follow-head ${textColor}`}>Follow Us</h1>
                <ul className='follow-list'>
                    <FaFacebook className={`f-icon ${textColor}`} />
                    <FaInstagram className={`f-icon ${textColor}`} />
                    <IoLogoYoutube className={`f-icon ${textColor}`} />
                    <FaLinkedin className={`f-icon ${textColor}`} />
                </ul>
            </div>
        </>
    );
}

export default Footer;
