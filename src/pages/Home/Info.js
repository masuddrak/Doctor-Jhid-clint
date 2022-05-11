import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 text-white'>
            <InfoCard img={clock} bgclass=' bg-gradient-to-r from-primary to-secondary'></InfoCard>
            <InfoCard img={location} bgclass='bg-accent'></InfoCard>
            <InfoCard img={phone} bgclass=' bg-gradient-to-r from-primary to-secondary'></InfoCard>
        </div>
    );
};

export default Info;