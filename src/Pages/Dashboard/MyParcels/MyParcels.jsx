import React from 'react';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import { useQuery } from '@tanstack/react-query';


const MyParcels = () => {

    const {user}=UseAuth();
    const axiosSecure=useAxiosSecure();

    const {data:parcels=[]}=useQuery({
       queryKey:['my-Parcels',user?.email],

       enabled: !!user?.email, 
       queryFn:async()=>{
        const res=await axiosSecure.get(`/parcels?email=${user.email}`);
        return res.data
       } 
      
    }
)
 console.log(parcels,user.email);
 

    return (
        <div>
           <h2>All of my parcels {parcels.length}</h2> 
        </div>
    );
};

export default MyParcels;