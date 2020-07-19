import React from 'react';
import { NavLink } from "react-router-dom";

export default ({to, text}) => (
    <NavLink
        to={to}
    >
        {text}
    </NavLink>
);
