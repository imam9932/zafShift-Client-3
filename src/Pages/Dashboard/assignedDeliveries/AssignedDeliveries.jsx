import React from 'react';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const {user}=UseAuth();
    const axiosSecure=useAxiosSecure();

    const {data:parcels=[]}=useQuery({
        queryKey:['parcels',user?.email,'driver_assigned'],
        enabled: !!user?.email,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
            return res.data;
        }
    })

//  const { data: parcels = [] } = useQuery({
//     queryKey: ['assigned-parcels', user?.email],
//     enabled:!!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get('/parcels/rider', {
//         params: {
//           riderEmail: user.email,
//           deliveryStatus: 'driver_assigned'
//         }
//       });
//       return res.data;
//     }
//   })

const handleDeliveryStatusUpdate=(parcel,status)=>{
  const statusInfo={deliveryStatus:status,
    riderId:parcel.riderId,
    trackingId:parcel.trackingId,


  }

let message=`Parcel status is updated with ${status.split('_').join(' ')}`

  axiosSecure.patch(`/parcels/${parcel._id}/status`,statusInfo)
  .then(res=>{
    if(res.data.modifiedCount){
       Swal.fire({
        position: "top-end",
        icon: "success",
        title:message  ,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}


    console.log("user:", user);
console.log("email:", user?.email);
    
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
        <th>Other Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel,index)=><tr  key={parcel._id}>
        <th>{index + 1 }</th>
        <td> {parcel.parcelName}</td>
        <td>
           {
            parcel.deliveryStatus==='driver_assigned'
            ? <>
             <button onClick={()=>handleDeliveryStatusUpdate(parcel,'rider_arriving')} className='btn btn-primary text-black'>Accept</button>
            <button className='btn btn-warning text-black'>Reject</button>
            </>
            : <span>Delivery accepted</span>
           }
            </td>
        <td> 
           <button onClick={()=>handleDeliveryStatusUpdate(parcel,'parcel_picked_up')} className='btn btn-primary text-black'>Mark as picked Up</button>
           <button onClick={()=>handleDeliveryStatusUpdate(parcel,'parcel_delivered')} className='btn btn-primary text-black'>Mark as Delivered</button>
        </td>
      </tr> )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AssignedDeliveries;