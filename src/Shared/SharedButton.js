import React from 'react';

const SharedButton = ({children}) => {
    return (
        <div>
            <button className='btn btn-secondary w-full'>{children}</button>
        </div>
    );
};

export default SharedButton;