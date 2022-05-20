import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
        })
        .then(res=>{
            if(res.status===403){
                toast.error('Forbbiden Authorization')
            }
           return res.json()})
        .then(data=>{
            if(data.modifiedCount >0){
                console.log(data)
                toast.success('created Admin Success')
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !=='admin'&&<button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default UserRow;