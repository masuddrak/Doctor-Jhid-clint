import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../sheard/Loading';

const ManageDoctors = () => {
    const { isLoading, error, data: doctors } = useQuery('doctors', () =>
    fetch('http://localhost:5000/doctor',{
        headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    }).then(res =>
        res.json()
    ))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage All Doctors{doctors.length} </h2>
        </div>
    );
};

export default ManageDoctors;