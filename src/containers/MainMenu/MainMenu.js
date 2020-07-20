import React from 'react';

import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import {
    ROUTE_ABOUT,
    ROUTE_HERBS,
    ROUTE_LOGIN,
    ROUTE_SIGN_UP
} from 'containers/Routes/Routes';
import { useAuth } from 'hooks/Auth/Auth';

const menuItems = [
    {
        href: ROUTE_LOGIN,
        text: 'Prisijungti'
    },
    {
        href: ROUTE_SIGN_UP,
        text: 'Registruotis'
    },
    {
        href: ROUTE_ABOUT,
        text: 'Apie Phyto'
    },
    {
        href: ROUTE_HERBS,
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
