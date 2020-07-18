import React from 'react';

import './NavigationLink.css';

export default ({href, text}) => (
    <li className="navbar-item">
        <a className="navbar-link" href={href}>{text}</a>
    </li>
);
