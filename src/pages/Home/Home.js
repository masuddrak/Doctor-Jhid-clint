import React from 'react';
import Banner from './Banner';
import Comment from './Comment';
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
            <Comment></Comment>
        </div>
    );
};

export default Home;