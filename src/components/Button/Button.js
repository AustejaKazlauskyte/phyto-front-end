import React from 'react';

export default ({children, ...other}) => (
    <button
        className="button-primary"
        {...other}
    >
        {children}
    </button>
);
