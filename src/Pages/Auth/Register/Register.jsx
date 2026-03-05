import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hook/UseAuth';
 

const Register = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}}=useForm();

const {registerUser}=UseAuth();

  const handleRegistration=(data)=>{
    console.log('after register',data);
    registerUser(data.email,data.password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
      <h1 className='text-2xl text-secondary font-bold'>Create an Account</h1>
      <h4>Register with ZapShift</h4>
      <form onSubmit={handleSubmit(handleRegistration)} >
         <fieldset className="fieldset">
          <label className="label ">Email</label>
          <input type="email" {...register('email',{required:true})} className="input w-full" placeholder="Email" />
          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}

          {/* {password} */}
          <label className="label">Password</label>
          <input type="password"  {...register('password',{required:true,minLength:6,pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/})}  className="input w-full" placeholder="Password" />
           {errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>}
           {errors.password?.type==='minlength' && <p className='text-red-500'>Password must be 6 characters or longer</p>}
           {errors.password?.type==='pattern' && <p className='text-red-500'>Password must have at least one uppercase,at least one lowercase,at least one number,and at least one special characters</p>}


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;