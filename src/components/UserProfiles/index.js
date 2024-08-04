import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const UserProfiles = ({ isClickToggle }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('https://66ad29feb18f3614e3b49471.mockapi.io/user-status')
            .then(response => setUserData(response.data));
    }, []);

    // Determine the class for theme
    const themeClass = isClickToggle ? 'dark-mode' : 'light-mode';
    const themeClass1 = isClickToggle ? 'dark-mode1' : 'light-mode1';

    return (
        <div className={`user-p-cont ${themeClass}`}>
            <h1 className={`sales-h ${themeClass}`}>Team members</h1>
            <p className='lead1'>scroll down</p>
            <ul className='user-list'>
                {userData.map(each => (
                    <li key={each.id} className={`user-list-item ${themeClass1}`}>
                        <img src={each.avatar} className='avatar' alt={each.name} />
                        <div>
                            <p className='name'>
                                {each.name} <span className='status'>{each.status}</span>
                            </p>
                            <p className='lead'>Lead Interactions {each.leadInteractions}</p>
                            <p className='lead'>Leads Converted {each.leadGenerations}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfiles;
