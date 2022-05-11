import React from 'react';
import quites from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Tesimonials = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Herry',
            img:people1,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum simply dummy printing and typesetting indust Ipsum has been the',
            location:'California'
        },
        {
            _id:1,
            name:'Winson Herry',
            img:people2,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been simply dummy printing and typesetting indust Ipsum the',
            location:'Bangladesh'
        },
        {
            _id:1,
            name:'Winson Herry',
            img:people3,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been simply dummy printing and typesetting indust Ipsum the',
            location:'India'
        },
    ]
    return (
        <div className='my-7'>
            <div  className='flex justify-between items-center '>
                <div>
                    <h1 className='text-primary font-bold text-xl'>Testimonils</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className=' lg:w-48' src={quites} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(reveiw=><Review
                    key={reveiw._id}
                    reveiw={reveiw}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Tesimonials;