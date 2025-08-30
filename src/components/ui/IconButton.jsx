import React from 'react';

const IconButton = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out cursor-pointer ${className}`}
        >
            {children} 
        </button>
    );
};

export default IconButton;