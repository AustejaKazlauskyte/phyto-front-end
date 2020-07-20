import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLink.css';

export default ({href, text}) => (
    <li className="navbar-item">
        <NavLink
            className="navbar-link"
            to={href}
        >
            {text}
        </NavLink>
    </li>
);
