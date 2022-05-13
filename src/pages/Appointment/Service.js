import React from 'react';
import Mybtn from '../sheard/Mybtn';

const Service = ({ service }) => {
    console.log(service)
    const { name,slots } = service
    return (
        <div class="card  bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length>0? <span>{slots[0]}</span>:<span className='text-red-500'>No Slot Available</span>}</p>
                <p className=' '>{slots.length} {slots.length>1?'SPACES':'SPACE'} AVAILABLE</p>
                <div  class="card-actions justify-center ">
                    <button disabled={slots.length === 0} className='btn btn-secondary text-white'>Book Appointment</button> 
                </div>
            </div>
        </div>
    );
};

export default Service;