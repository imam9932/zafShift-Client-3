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

            console.log('api response',res)
            return res.data;
            
        }
       
    }

);

const handlePayment=async()=>{
    const paymentInfo={
        cost:parcel.cost,
        parcelId:parcel._id,
        senderEmail:parcel.senderEmail,
        parcelName:parcel.parcelName
    }
    const res=await axiosSecure.post('/create-checkout-session',paymentInfo);
    console.log(res.data)
    window.location.href=res.data.url;
}
    if (isLoading) {
        return <div>
            <span className='loading loading-infinity loading-xl'></span>
        </div>
    }
    
    return (
        <div>
            <h1>Please pay ${parcel.cost} for : {parcel.parcelName}

            </h1>
            <button onClick={handlePayment} className='btn btn-primary'>Pay</button>
        </div>
    );
};

export default Payment;