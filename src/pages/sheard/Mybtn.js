import React from 'react';

const Mybtn = ({children}) => {
    return (
        <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default Mybtn;