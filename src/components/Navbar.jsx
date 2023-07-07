import React, { useState } from 'react';

import './navbar.scss';

const menu = ['Features & Solution', 'Pricing', 'Resources'];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('Pricing');

    const handleClick = (i) => {
        setActiveMenu(i);
    };

    return (
        <nav>
            <div className='nav'>
                <div className='nav__logo'>G</div>
                <div className='nav__menu'>
                    <ul className='nav__lists'>
                        {menu.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleClick(item)}
                                className={activeMenu === item && 'active'}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button>Start Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
