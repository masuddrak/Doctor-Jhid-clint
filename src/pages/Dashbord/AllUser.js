import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../sheard/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    const {data:users,isLoading,refetch} = useQuery('users', () =>
    fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}
    }).then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <Loading></Loading>
  }
    return (
        <div>
            <div class="overflow-x-auto mt-3">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th>no:</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delet User</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><UserRow
                           key={user._id}
                           user={user}
                           index={index+1}
                           refetch={refetch}
                           ></UserRow>)
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;