import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FcAcceptDatabase } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from 'sweetalert2';




const ApproveRiders = () => {
    const axiosSecure=useAxiosSecure();
    const {refetch,data:riders=[]}=useQuery({
        queryKey:['riders','pending'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/riders');
            return res.data;
        }
    });

     const updateRidersStatus=(rider,status)=>{
     const updateInfo={status:status,email:rider.email}
        axiosSecure.patch(`/riders/${rider._id}`,updateInfo)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
               Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title:  `Rider status is set to ${status}`,
                                        showConfirmButton: false,
                                        timer: 2000,
                                      });  
            }
        })

 }
    

    const handleApproval=(rider)=>{
       updateRidersStatus(rider,'approved')
    };

    const handleRejection=rider=>{
updateRidersStatus(rider,'rejected')
    }
     
    return (
        <div>
           <h1>Approval riders pending : {riders.length}</h1> 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>District</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

       {
        riders.map((rider,index)=>  <tr key={rider._id}>
        <th> {index+1}</th>
        <td>{rider.riderName}</td>
        <td>{rider.riderEmail}</td>
        <td>{rider.riderDistrict}</td>
        <td><p className={`${rider.status==='approved'? 'text-green-800' : 'text-red-500'}`}>{rider.status}</p></td>
        
        <td className='flex gap-3'>
            <button onClick={()=>handleApproval(rider)} className='btn'>
                <FcAcceptDatabase />

            </button>
            <button onClick={()=>handleRejection(rider)} className='btn'>
                <ImCross />

            </button>
            <button className='btn'>
                <RiDeleteBin2Line />

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

export default ApproveRiders;