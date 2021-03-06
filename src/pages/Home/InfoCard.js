import React from 'react';

const InfoCard = ({img,bgclass}) => {
    return (
        <div className={`card lg:card-side  shadow-xl ${bgclass}`}>
            <figure><img src={img} className='ml-5' alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;