import React from 'react';
import UseAuth from '../hook/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth();
    const location=useLocation();
    // console.log('location',location)

    if(loading){
        return <div>
             <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;