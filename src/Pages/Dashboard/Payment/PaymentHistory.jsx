import React from 'react';
import UseAuth from '../../../hook/UseAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import {   useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const {user}=UseAuth();
    const axiosSecure=useAxiosSecure();
    const {data:payments=[]}=useQuery({
queryKey:['payments',user.email],
queryFn:async()=>{
    const res=await axiosSecure.get(`/payments?email=${user.email}`)
    return res.data
}
    })
    return (
        <div>
            <h2>Payment History : {payments.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Payment NO</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Transaction ID </th>
        <th>Paid Time</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment,index)=>
             <tr key={payment._id}>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td> {payment.amount} TK</td>
        <td> {payment.transactionId}</td>
        <td> {payment.paidAt}</td>
      </tr>
        )
      }
     
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;