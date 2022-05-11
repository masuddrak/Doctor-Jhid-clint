import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import Mybtn from '../sheard/Mybtn';

const MackAppointment = () => {
    return (
        <div style={{background:`url(${appointment})`}}
         className='flex justify-center items-center my-16'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-primary text-xl font-bold'>Appointment</h1>
                <h1 className=' text-3xl my-3'>Make an appointment Today</h1>
                <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Mybtn >Checked now</Mybtn>
            </div>

        </div>
    );
};

export default MackAppointment;