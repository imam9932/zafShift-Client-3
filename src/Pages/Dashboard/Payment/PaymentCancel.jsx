import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Your Payment has been Cancelled</h1>
            <Link to='/dashboard/my-parcels'>Try Again</Link>
        </div>
    );
};

export default PaymentCancel;