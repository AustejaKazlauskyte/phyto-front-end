import React from 'react';

import { NavigationLink } from 'components/NavigationLink';

import './NavigationMenu.css';

export default ({ items }) => (
    <nav className="navbar">
        <ul className="navbar-list">
            {items.map(({href, text}) => (
                <NavigationLink
                    key={href}
                    href={href}
                    text={text}
                />
            ))}
        </ul>
    </nav>
);
