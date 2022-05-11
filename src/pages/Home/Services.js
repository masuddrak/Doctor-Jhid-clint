import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const services=[
        {
            _id:1,
            name:'Fluoride Treatment',
            img:fluoride,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id:1,
            name:'Cavity Filling',
            img:cavity,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id:1,
            name:'Teeth Whitening',
            img:whitening,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-primary font-bold text-2xl'>OUR SERVICES</h1>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8'>
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;