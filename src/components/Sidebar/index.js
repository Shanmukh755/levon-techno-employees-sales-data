import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = props => {
    const { isClickToggle, isClickArrow } = props;
    const sidebarBg = isClickToggle ? "sidebar-container dark" : "sidebar-container light";
    const sidebarTextClass = isClickToggle ? "dark-text" : "light-text";

    

    return (
        <div className={sidebarBg}>
            <h1 className={`sidebar-head ${sidebarTextClass}`}>Dashboard</h1>
            <ul className='sidebar-list'>
                <Link to="/">
                    <li className={`sidebar-item ${sidebarTextClass}`}>Overview</li>
                </Link>
                <Link to="/analytics">
                    <li className={`sidebar-item ${sidebarTextClass}`}>Analytics</li>
                </Link>
                <Link to="/settings">
                    <li className={`sidebar-item ${sidebarTextClass}`}>Settings</li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;
