import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
const AppointBanner = ({date,setDate}) => {
    
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair img' />
                <div className='mr-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;