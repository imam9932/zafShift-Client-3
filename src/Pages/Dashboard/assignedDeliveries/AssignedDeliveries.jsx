import React from 'react';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignedDeliveries = () => {
    const {user}=UseAuth();
    const axiosSecure=useAxiosSecure();

    const {data:parcels=[]}=useQuery({
        queryKey:['parcels',user.email,'driver_assigned'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
            return res.data;
        }
    })
    return (
        <div>
            <h1>Parcels Pending PickUp : {parcels.length} </h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Confirm</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel,index)=><tr  key={parcel._id}>
        <th>{index + 1 }</th>
        <td> {parcel.parcelName}</td>
        <td>
            <button className='btn btn-primary text-black'>Accept</button>
            <button className='btn btn-warning text-black'>Reject</button>
            </td>
        <td>Blue</td>
      </tr> )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AssignedDeliveries;