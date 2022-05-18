import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-secondary'>My Dashbord</h2>
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashbord'>My Appointment</Link></li>
                    <li><Link to='/dashbord/myReviews'>Reviews</Link></li>
                    <li><Link to='/dashbord/allUser'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;