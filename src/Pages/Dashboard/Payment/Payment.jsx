import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const Payment = () => {
    const { parcelId } = useParams()
    const axiosSecure = useAxiosSecure();
    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
            
        }
       
    }

);
    if (isLoading) {
        return <div>
            <span className='loading loading-infinity loading-xl'></span>
        </div>
    }
    console.log(parcel);
    return (
        <div>
            <h1>Please pay {parcel.cost} for : {parcel.parcelName}

            </h1>
            <button className='btn btn-primary'>Pay</button>
        </div>
    );
};

export default Payment;