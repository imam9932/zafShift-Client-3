import React from 'react';
import UseAuth from '../hook/UseAuth';
import useRole from '../hook/useRole';
import Forbidden from '../Components/Forbidden/Forbidden';
import Loading from '../Components/Loading/Loading';

const RiderOnlyRoute = ({children}) => {
     const {loading,user}=UseAuth();
    const {role,roleLoading}=useRole();
    if(loading || !user || roleLoading){
        return <Loading></Loading>
    }

    if(role !== 'rider'){
        return <Forbidden></Forbidden>
    }
    
    return children;
    ;
};

export default RiderOnlyRoute;