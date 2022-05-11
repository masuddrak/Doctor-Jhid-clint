import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MackAppointment from './MackAppointment';
import Services from './Services';
import Tesimonials from './Tesimonials';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MackAppointment></MackAppointment>
            <Tesimonials></Tesimonials>
        </div>
    );
};

export default Home;