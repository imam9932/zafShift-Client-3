import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';

const SendParcel = () => {
    const { 
        register,
         handleSubmit,
         control, 
        // formState: { errors } 
    } = useForm();

    const axiosSecure=useAxiosSecure();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)]
     
    const senderRegion=useWatch({control,name:'senderRegion'});
    const receiverRegion=useWatch({control,name:'receiverRegion'});

    const districtsByRegion=region=>{
        const regionDistricts=serviceCenters.filter(c=>c.region===region);
        const districts=regionDistricts.map(d=>d.district);
        return districts;
    }

    const handleSendParcel = data => {
        console.log(data);

        const isDocument=data.parcelType==='document';
        const isSameDistrict=data.senderDistrict===data.receiverDistrict;
        const parcelWeight=parseFloat(data.parcelWeight);

        let cost=0;
        if(isDocument)
        {
            cost=isSameDistrict? 60:80; 
        }
        else{
if(parcelWeight<3){
    cost=isSameDistrict ? 110 : 150
}
else{
    const minCharge=isSameDistrict ? 110 : 150;
    const extraWeight=parcelWeight-3;
    const extraCharge=isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
     
    cost=minCharge+extraCharge;
}
        }

        console.log('cost',cost)

        Swal.fire({
  title: "Agree with the cost?",
  text: ` You will pay ${cost} tk`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, I Agree!"
}).then((result) => {
  if (result.isConfirmed) {

    // save the data to the db
axiosSecure.post('/parcels',data)
.then(res=>{
    console.log('after saving parcel' ,res.data)
})

    Swal.fire({
      title: "Submitted!",
      text: "Your request has been Submitted.Please wait for confirmation",
      icon: "success"
    });
  }
});

    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>

            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 text-black ' >

                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" value='document' {...register('parcelType')} className="radio" defaultChecked />

                        Document</label>
                    <label className="label">
                        <input type="radio" value='non-document' {...register('parcelType')} className="radio" />

                        Non-Document</label>
                </div>

                {/* parcel info:name,weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" className="input w-full" placeholder="Parcel Name" {...register('parcel Name')} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number" className="input w-full" placeholder="Parcel weight" {...register('parcel Weight')} />

                    </fieldset>

                </div>

                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div>
                        {/* sender info */}
                        <h4 className='text-2xl font-semibold'>Sender Details</h4>
                        <fieldset className="fieldset space-y-2">
                            {/* sender name */}
                            <label className="label">Sender Name</label>
                            <input type="text" className="input w-full" placeholder="Sender Name" {...register('SenderName')} />

                            {/* sender address */}
                            <label className="label">Sender Address</label>
                            <input type="text" className="input w-full" placeholder="  Address" {...register('SenderAddress')} />

                            {/* sender email */}
                            <label className="label">Sender Email</label>
                            <input type="email" className="input w-full" placeholder="  Email" {...register('SenderEmail')} />

                            {/* sender phone */}
                            <label className="label">Sender Phone</label>
                            <input type="number" className="input w-full" placeholder="  Phone" {...register('SenderPhone')} />


                            {/* sender region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Regions</legend>
                                <select  {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>


                            {/* sender District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Districts</legend>
                                <select  {...register('senderDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>

                            

                            {/* pickup instruction */}
                            <label className="label">Pickup Instruction</label>
                            <input type="text" className="input w-full" placeholder="Pickup Instruction" {...register('PickupInstruction')} />

                        </fieldset>
                    </div>
                    <div>
                        {/* receiver info */}
                        <h4 className='text-2xl font-semibold'>Receiver Details</h4>
                        <fieldset className="fieldset space-y-2">
                            {/* Receiver name */}
                            <label className="label">Receiver Name</label>
                            <input type="text" className="input w-full" placeholder="Receiver Name" {...register('ReceiverName')} />

                            {/* Receiver address */}
                            <label className="label">Receiver Address</label>
                            <input type="text" className="input w-full" placeholder="  Address" {...register('ReceiverAddress')} />

                            {/* Receiver email */}
                            <label className="label">Receiver Email</label>
                            <input type="email" className="input w-full" placeholder="  Email" {...register('ReceiverEmail')} />

                            {/* Receiver phone */}
                            <label className="label">Receiver Phone</label>
                            <input type="number" className="input w-full" placeholder="  Phone" {...register('ReceiverPhone')} />


                            {/* Receiver region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Regions</legend>
                                <select  {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>


                            {/*  Receiver District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Districts</legend>
                                <select  {...register('receiverDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtsByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>

                               



                            {/* Delivery instruction */}
                            <label className="label">Delivery Instruction</label>
                            <input type="text" className="input w-full" placeholder="Delivery Instruction" {...register('DeliveryInstruction')} />

                        </fieldset>
                    </div>
                </div>
                <input type="submit" className='btn btn-primary text-black mt-5' value='send Parcel' />
            </form>
        </div>
    );
};

export default SendParcel;