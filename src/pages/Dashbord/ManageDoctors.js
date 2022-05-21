import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../sheard/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { isLoading, error, data: doctors,refetch } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor', {
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        ))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage All Doctors{doctors.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Spacialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            doctors.map((doctor,index)=><DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;