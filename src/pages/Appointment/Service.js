import React from 'react';
import Mybtn from '../sheard/Mybtn';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div class="card  bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>}</p>
                <p className=' '>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div class="card-actions justify-center ">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        for="booking-modal" class="btn btn-secondary text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;