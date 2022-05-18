import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientee=${user.email}`,{
                method:'GET',
                headers:{'authorization':`Bearer ${localStorage.getItem('accessToken')}`}
            })
                .then(res => {
                    if(res.status ===401 || res.status ===403){
                        signOut(auth);
                        navigate('/')
                    }
                   return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto mt-3">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment,index)=><tr key={appointment._id}>
                                <th>{index+1}</th>
                                <td>{appointment.patient}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slotTime}</td>
                                <td>{appointment.treatmentName}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;