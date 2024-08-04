import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

import './index.css';

const Header = props => {
    const { onClickToggleBtn, isClickToggle, onClickArrowBtn } = props;
    const onClickToggle = () => {
        onClickToggleBtn();
    };
    const onClickArrow = () => {
        onClickArrowBtn()
    }
    const navBg = isClickToggle ? "nav-bar dark" : "nav-bar light";
    const navHeadClass = isClickToggle ? "nav-head dark-text" : "nav-head light-text";
    const navItemClass = isClickToggle ? "nav-item dark-text" : "nav-item light-text";
    const navIconClass = isClickToggle ? "nav-icon dark-icon" : "nav-icon light-icon";
    return (
        <nav className={navBg}>
            <h1 className={navHeadClass}>
                <IoIosArrowDroprightCircle className={navIconClass} id="sideArrow" type="button" onClick={onClickArrow}/>
                Sales Team
            </h1>
            <ul className='nav-list'>
                <a href='#home'>
                    <li className={navItemClass}>Home</li>
                </a>
                <a href='#about'>
                    <li className={navItemClass}>About</li>
                </a>
                <a href='#followUs'>
                    <li className={navItemClass}>Follow us</li>
                </a>
                <IoMdNotificationsOutline className={navIconClass} />
                {isClickToggle ? <p id="mini" className={`${navItemClass}`}>Turn on<br/>Light mode</p> : <p id="mini" className={`${navItemClass}`}>Turn on<br/>Dark mode</p>}
                <IoMdMoon className={navIconClass} type='button' onClick={onClickToggle} />
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='nav-img' alt='profile' />
            </ul>
        </nav>
    );
};

export default Header;
