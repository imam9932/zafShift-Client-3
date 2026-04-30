import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAuth from '../../hook/UseAuth';
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../hook/useAxiosSecure';
import deliveryMan from '../../assets/agent-pending.png'
import Swal from 'sweetalert2';

const Rider = () => {
     const { 
            register,
             handleSubmit,
             control, 
            // formState: { errors } 
        } = useForm();

         const {user}=UseAuth()
            // const navigate=useNavigate()
        
            const axiosSecure=useAxiosSecure();
            const serviceCenters = useLoaderData();
            const regionsDuplicate = serviceCenters.map(c => c.region);
            const regions = [...new Set(regionsDuplicate)];

            const riderRegion=useWatch({control,name:'riderRegion'});

            const districtsByRegion=region=>{
        const regionDistricts=serviceCenters.filter(c=>c.region===region);
        const districts=regionDistricts.map(d=>d.district);
        return districts;
    }

            const handleApplication=data=>{
                console.log(data);
                axiosSecure.post('/riders',data)
                .then(res=>{
                    if(res.data.insertedId){

                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your application has been submitted.We will reach to you in 45 days",
                          showConfirmButton: false,
                          timer: 2000,
                        });
                    }
                })
            }
    return (
        <div>
            <h2 className='text-4xl font-bold '>Be A Rider</h2>
            <p className='mt-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br /> From personal packages to business shipments <br /> — we deliver on time, every time.</p>
             <form onSubmit={handleSubmit(handleApplication)} className='mt-12 text-black ' >

                {/* rider info */}
                        <h4 className='text-2xl font-semibold'>Tell us about yourself</h4>

                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center'>
                    <div>
                        
                        <fieldset className="fieldset space-y-2">
                            {/* rider name */}
                            <label className="label">Rider Name</label>
                            <input type="text" defaultValue={user?.displayName} className="input w-full" placeholder="Name" {...register('riderName')} />

                            

                            {/* rider email */}
                            <label className="label">Email</label>
                            <input type="email" defaultValue={user?.email} className="input w-full" placeholder="  Email" {...register('riderEmail')} />

                            {/* NID */}
                            <label className="label">NID No</label>
                            <input type="number" className="input w-full" placeholder="NID" {...register('riderNID')} />
                            </fieldset>
                    </div>

                    <div>
                        <fieldset>
                             {/* phone */}
                            <label className="label">Phone</label>
                            <input type="number" className="input w-full" placeholder="  Phone" {...register('riderPhone')} />


                            {/*  region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Regions</legend>
                                <select  {...register('riderRegion')} defaultValue="Pick a region" className="select">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>


                            {/* District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Districts</legend>
                                <select  {...register('riderDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r} </option>)
                                    }
                                </select>

                            </fieldset>

                        </fieldset>
                    </div>
                    <div>
                        <img src={deliveryMan} alt="" />
                    </div>
                     
                </div>
                <input type="submit" className='btn btn-primary text-black mt-5' value='Submit' />
            </form>
        </div>
    );
};

export default Rider;