import React from 'react';

import { NavigationMenu } from 'components/NavigationMenu';

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

export default () => (
    <NavigationMenu items={menuItems} />
);
