import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ onSearchChange, placeholder }) => {
    return (
        <div>
            <input 
                className='search'
                onChange={onSearchChange} 
                type='search' 
                placeholder={placeholder} />
        </div>
    )
}