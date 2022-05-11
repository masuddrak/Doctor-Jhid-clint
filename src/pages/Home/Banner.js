import React from 'react';
import chair from '../../assets/images/chair.png';
import Mybtn from '../sheard/Mybtn';
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-3'>
                    <h1 class="text-5xl font-bold">Your Best Service in Docktor Azad</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Mybtn>Get sterted</Mybtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;