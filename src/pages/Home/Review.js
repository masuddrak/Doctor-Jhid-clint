import React from 'react';

const Review = ({ reveiw }) => {
    const { name, img, location, description } = reveiw
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{description}</p>
                <div>
                    <div className='flex items-center'>
                        <div class="avatar ">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h1 className='font-bold'>{name}</h1>
                            <h1>{location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;