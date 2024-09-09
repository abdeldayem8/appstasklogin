import React, { useContext } from 'react'

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protect = ({children}) => {
    const userToken =useSelector((state) => state.auth.token);
    if(!userToken){
        return <>
        <Navigate to="/login"/>
        </>
    }
  return (
    <div>
     {children}
    </div>
  )
}

export default Protect
