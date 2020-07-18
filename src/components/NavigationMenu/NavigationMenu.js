import React from 'react';

import { NavigationLink } from 'components/NavigationLink';
import { Button } from '../Button';

import './NavigationMenu.css';

export default ({ items, logout }) => (
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
        {logout &&
            <Button
                className="navbar-list-logout"
                onClick={logout}
            >
                Atsijungti
            </Button>
        }
    </nav>
);
