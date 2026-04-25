import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiUserSettingsFill } from 'react-icons/ri';
import { LiaUserSlashSolid } from "react-icons/lia";
import Swal from 'sweetalert2';


const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        const roleInfo = { role: 'admin' };
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                   
                    Swal.fire({
                        title: "Are you sure?",
                        text: `${user.displayName} make as an Admin`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, make it!"
                    }).then((result) => {
                        if (result.isConfirmed) 
                             refetch()
                            Swal.fire({
                            title: `${user.displayName} is Admin now`,
                            text: "He can controls your website.",
                            icon: "success"
                        });
                    });
                }
            })
    };

    const handleRemoveAdmin=user=>{
         const roleInfo = { role: 'user' };
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    
                    Swal.fire({
                        title: "Are you sure?",
                        text: `${user.displayName} remove from Admin`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, make it!"
                    }).then((result) => {
                        if (result.isConfirmed) 
                            refetch()
                            Swal.fire({
                            title: `${user.displayName} is user now`,
                            text: "He can't controls your website.",
                            icon: "success"
                        });
                    });
                }
            })

    }
    return (
        <div>
            <h1 className='text-xl font-bold'>All of Users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <tr key={user._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"> {user.displayName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            <button onClick={()=>handleRemoveAdmin(user)} className='btn bg-red-400'> <RiUserSettingsFill />
                                            </button> :
                                            <button onClick={() => handleMakeAdmin(user)} className='btn bg-green-400'> <LiaUserSlashSolid />
                                            </button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;