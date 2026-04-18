import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hook/useAxiosSecure';


const PaymentSucess = () => {
    const [searchParams]=useSearchParams();
    const [paymentInfo,setPaymentInfo]=useState({})
    const sessionId=searchParams.get('session_id');
    const axiosSecure=useAxiosSecure()
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then(res=>{
            console.log(res.data);
            setPaymentInfo({
                transactionId:res.data.transactionId,
                trackingId:res.data.trackingId,
            })
           })
        }
    },[sessionId,axiosSecure]
)
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold   mt-10'>Payment Successful</h1>
            <p ><span className='font-bold text-lg'>Your Transaction Id :</span> {paymentInfo.transactionId}</p>
            <p ><span className='font-bold text-lg'>Your Tracking Id :</span> {paymentInfo.trackingId}</p>
            
            <Link to='/dashboard/my-Parcels' className='btn btn-secondary mt-10'>Go to Your Parcels</Link>
        </div>
    );
};

export default PaymentSucess;