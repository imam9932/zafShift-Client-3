import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAuth from '../../hook/UseAuth';
import { useLoaderData, useNavigate } from 'react-router';
import useAxiosSecure from '../../hook/useAxiosSecure';

const Rider = () => {
     const { 
            register,
             handleSubmit,
             control, 
            // formState: { errors } 
        } = useForm();

         const {user}=UseAuth()
            const navigate=useNavigate()
        
            const axiosSecure=useAxiosSecure();
            const serviceCenters = useLoaderData();
            const regionsDuplicate = serviceCenters.map(c => c.region);
            const regions = [...new Set(regionsDuplicate)];

            const senderRegion=useWatch({control,name:'senderRegion'});

            const districtsByRegion=region=>{
        const regionDistricts=serviceCenters.filter(c=>c.region===region);
        const districts=regionDistricts.map(d=>d.district);
        return districts;
    }

            const handleApplication=data=>{
                console.log(data);
            }
    return (
        <div>
            <h2 className='text-4xl text-center font-bold '>Be A Rider</h2>
             <form onSubmit={handleSubmit(handleApplication)} className='mt-12 text-black ' >

                

                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div>
                        {/* rider info */}
                        <h4 className='text-2xl font-semibold'>RiderDetails</h4>
                        <fieldset className="fieldset space-y-2">
                            {/* rider name */}
                            <label className="label">Rider Name</label>
                            <input type="text" defaultValue={user?.displayName} className="input w-full" placeholder="Sender Name" {...register('riderName')} />

                            {/* rider address */}
                            <label className="label">Address</label>
                            <input type="text"  className="input w-full" placeholder="Address" {...register('riderAddress')} />

                            {/* rider email */}
                            <label className="label">Email</label>
                            <input type="email" defaultValue={user?.email} className="input w-full" placeholder="  Email" {...register('riderEmail')} />

                            {/* phone */}
                            <label className="label">Phone</label>
                            <input type="number" className="input w-full" placeholder="  Phone" {...register('riderPhone')} />


                            {/*  region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Regions</legend>
                                <select  {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>


                            {/* District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Districts</legend>
                                <select  {...register('senderDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>

                            

                            

                        </fieldset>
                    </div>
                     
                </div>
                <input type="submit" className='btn btn-primary text-black mt-5' value='Submit' />
            </form>
        </div>
    );
};

export default Rider;