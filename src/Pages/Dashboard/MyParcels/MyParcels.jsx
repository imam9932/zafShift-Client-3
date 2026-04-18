import React from 'react';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrFormView } from "react-icons/gr";
import Swal from 'sweetalert2';
import { Link } from 'react-router';





const MyParcels = () => {

  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [],refetch } = useQuery({
    queryKey: ['my-Parcels', user?.email],

    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data
    }
   

  }
  )
  const handleParcelDelete = id => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {


      if (result.isConfirmed)

        axiosSecure.delete(`/parcels/${id}`)
          .then(res => {
            console.log(res.data)

            if (res.data.deletedCount) {

              // deleted data form UI
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your request has been deleted.",
                icon: "success"
              });
            }
          });


    });
  };

  const handlePayment=async(parcel)=>{
    const paymentInfo={
      cost:parcel.cost,
      parcelId:parcel._id,
      senderEmail:parcel.senderEmail,
      parcelName:parcel.parcelName
    }
    const res=await axiosSecure.post('/payment-checkout-session',paymentInfo);

   window.location.href=(res.data.url);

  }
    


  return (
    <div>
      <h2>All of my parcels {parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment </th>
              <th>Delivery Status </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              parcels.map((parcel, index) => <tr key={parcel._id} >

                <th>{index + 1}</th>
                <td> {parcel.parcelName}</td>
                <td> {parcel.cost}</td>
                <td>
                  {
                    parcel.paymentStatus==='paid'? <span className='text-white bg-secondary btn'>Paid</span>: <button onClick={()=>handlePayment(parcel)} className='btn btn-primary text-black'>Please Pay</button> 
                  }
                </td>
                <td> {parcel.deliveryStatus}</td>
                <td>Blue</td>

                <td className='gap-2 flex'>
                  <button className='btn btn-square hover:bg-primary'><CiEdit />

                  </button>
                  <button onClick={() => handleParcelDelete(parcel._id)} className='btn btn-square hover:bg-primary'> <RiDeleteBin5Fill />

                  </button>
                  <button className='btn btn-square hover:bg-primary'> <GrFormView />


                  </button>
                </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;