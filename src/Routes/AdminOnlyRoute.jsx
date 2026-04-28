import React from 'react';
import UseAuth from '../hook/UseAuth';
import useRole from '../hook/useRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/Forbidden/Forbidden';

const AdminOnlyRoute = ({children}) => {
    const {user,loading}=UseAuth();
    const {role,roleLoading}=useRole();
    if(loading || roleLoading){
        return <Loading></Loading>
    }

    if(role !== 'admin'){
        return <Forbidden></Forbidden>
    }
    
    return children;
        
    ;
};

export default AdminOnlyRoute;