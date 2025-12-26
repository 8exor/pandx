import { getAccessToken } from '@utils/Session'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const token = getAccessToken();
    if(!token){
        return  <Navigate to={"/"} />
    }
  return <Outlet/>;
}

export default ProtectedRoute
