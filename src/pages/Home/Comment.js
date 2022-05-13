import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Mybtn from '../sheard/Mybtn';
const Comment = () => {
    return (
        <div style={{ background: `url(${appointment})`, backgroundSize: 'cover' }} className='p-10 my-40'>

            <div className='text-center'>
                <h1 className=' text-xl text-primary'>Contact Us</h1>
                <h1 className=' text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="email" className="input input-bordered w-3/6 mx-auto mt-3" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-3/6 mx-auto my-3" />
                        <textarea name="" placeholder="Write Your Comment" id="" cols="10" rows="5" className="rounded-lg outline-none p-4  w-3/6 mx-auto" ></textarea>
                    </div>
                    <div className="form-control w-60  mx-auto mt-3">
                        <Mybtn>Submit</Mybtn>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Comment;