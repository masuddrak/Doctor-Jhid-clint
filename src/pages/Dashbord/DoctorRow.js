import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index,refetch }) => {
    const { name, spacialty, img,email } = doctor
    const handelDelete=(email)=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                toast.success(`Deleted ${name} Doctor`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded-full">
                    <img src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{spacialty}</td>
            <td><button onClick={()=>handelDelete(email)} class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;