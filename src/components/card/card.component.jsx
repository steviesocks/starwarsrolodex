import React from 'react';
import './card.styles.css';

export const Card = ({ person }) => {

    return (
        <div className='card-container'>
            <img alt='jedi' src={`https://www.robohash.org/${person.name}?set=set3&size=125x125`} />
            <h1> {person.name} </h1>
            <p> {`Born in: ${person.birth_year}`}</p>
        </div>
    )
}