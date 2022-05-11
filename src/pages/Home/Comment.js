import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Mybtn from '../sheard/Mybtn';
const Comment = () => {
    return (
        <div style={{ background: `url(${appointment})`, backgroundSize: 'cover' }} className='p-10 my-10'>

            <div className='text-center'>
                <h1 className=' text-xl text-primary'>Contact Us</h1>
                <h1 className=' text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div>
                <div class="card-body">
                    <div class="form-control">
                        <input type="text" placeholder="email" class="input input-bordered w-3/6 mx-auto mt-3" />
                        <input type="text" placeholder="Subject" class="input input-bordered w-3/6 mx-auto my-3" />
                        <textarea name="" placeholder="Write Your Comment" id="" cols="10" rows="5" class="rounded-lg outline-none p-4  w-3/6 mx-auto" ></textarea>
                    </div>
                    <div class="form-control w-60  mx-auto mt-3">
                        <Mybtn>Submit</Mybtn>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Comment;