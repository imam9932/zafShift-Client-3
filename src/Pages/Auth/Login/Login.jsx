import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hook/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin';
 
const Login = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const {signInUser}=UseAuth();
  const location=useLocation()
console.log('in the login page,',location);

const navigate=useNavigate()
  const handleLogin=(data)=>{
    console.log('form data',data)
    signInUser(data.email,data.password)
    .then(res=>{
      console.log(res.user)
      navigate(location?.state || '/')
    })
    .catch(err=>{
      console.log(err.message);
    })

  }
  return (
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleSubmit(handleLogin)} >
        <div className="card-body">
        <h1 className='font-bold text-secondary text-lg'>Please log in your ZapShift account</h1>
        <fieldset className="fieldset">

          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register('email',{required:true})} />
          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}

          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{required:true,minLength:6 })} />
           {errors.password?.type==='minlength' && <p className='text-red-500'>Password must be 6 characters or longer</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

        </fieldset>
        <h4 className='text-center'>New to Zap Shift ? Please <Link 
        state={location.state}
        className='underline text-blue-500' to='/register'>Register</Link></h4>
      </div>
    </form>
     <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;