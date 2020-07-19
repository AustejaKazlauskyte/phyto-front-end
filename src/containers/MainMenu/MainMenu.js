import React from 'react';

import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import { useAuth } from 'hooks/Auth/Auth';

const menuItems = [
    {
        href: '/login',
        text: 'Prisijungti'
    },
    {
        href: '/sign-up',
        text: 'Registruotis'
    },
    {
        href: '/about',
        text: 'Apie Phyto'
    },
    {
        href: '/herbs',
        text: 'Vaistažolės'
    }
];

export default () => {
    const {isAuthenticated, logout} = useAuth();

    return (
        <NavigationMenu
            items={menuItems}
            logout={isAuthenticated() && logout}
        />
    );
};
