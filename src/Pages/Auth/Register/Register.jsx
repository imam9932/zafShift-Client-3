import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hook/UseAuth';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin';
import axios from 'axios';
 
 
 

const Register = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}}=useForm();
    const navigate=useNavigate()

const {registerUser,updateUserProfile}=UseAuth();

  const handleRegistration=(data)=>{
    console.log('after register',data.photo[0]);
    const profileImg=data.photo[0]
    registerUser(data.email,data.password)
    .then(res=>{
      console.log(res.user);

      // store the image and get the photo url
      const formData=new FormData();
      formData.append("image",profileImg);
      const image_API_URL = `https://api.imgbb.com/1/upload?key=a52fc5e71b64ac0b6b528963b985be2a`

       
      axios.post(image_API_URL,formData)
      .then(res=>{
        console.log('after upload',res.data.data.url)

        // update user profile
        const userProfile={
          displayName:data.name,
          photoURL: res.data.data.url
        }

        updateUserProfile(userProfile)
        .then(()=>{
          console.log('user profile updated done')
          navigate(location.state || '/')
        })
        .catch(error=>{
          console.log(error)
        })
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
      <div className='card-body'>
        <h1 className='text-2xl text-secondary font-bold'>Create an Account</h1>
      <h4>Register with ZapShift</h4>
      <form onSubmit={handleSubmit(handleRegistration)} >
         <fieldset className="fieldset">


           {/* name field */}
          <label className="label ">Name</label>
          <input type="name" {...register('name',{required:true})} className="input w-full" placeholder="name" />
          {errors.name?.type==='required' && <p className='text-red-500'>Name is required</p>}


           {/* photo field */}
          <label className="label ">Photo</label>
          <input type="file" {...register('photo',{required:true})} className="file-input w-full" placeholder="photo" />
          {errors.photo?.type==='required' && <p className='text-red-500'>Photo is required</p>}

          {/* email field */}
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
        <h4 className='text-center'>Already have an account? please <Link 
        state={location.state}
        className='underline text-blue-400' to='/login'>Log in</Link></h4>
      </form>
       <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;