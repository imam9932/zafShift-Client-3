import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();

    const handleSendParcel=data=>{

    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>

            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12' >

                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" value='document' {...register('parcelType')} className="radio" defaultChecked />

                        Document</label>
                    <label className="label">
                        <input type="radio" value='non-document' {...register('parcelType')} className="radio"   />

                        Non-Document</label>
                </div>

                {/* parcel info:name,weight */}
                <div>

                </div>

                {/* two column */}
                <div>
                    {/* sender info */}
                    <div>

                    </div>
                    {/* receiver info */}
                    <div>

                    </div>
                </div>
                <input type="submit" className='btn btn-primary text-black' value='send Parcel' />
            </form>
        </div>
    );
};

export default SendParcel;