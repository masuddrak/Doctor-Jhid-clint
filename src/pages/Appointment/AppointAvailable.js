import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AppointAvailable = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center my-6 text-xl text-secondary'>Available Appointments on April 30, 2022 {format(date, 'PP')}.</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                    {
                        services.map(service=><Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
                {
                    treatment && <BookingModal treatment={treatment}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AppointAvailable;