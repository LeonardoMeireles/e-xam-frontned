import {Outlet, Navigate, useLocation} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../AuthContext";

const AdminRoute = () => {
  const {user} = useContext(AuthContext);
  const location = useLocation();
  console.log(user.email)
  return (
    user?.role === 'ADMIN' ? <Outlet/> : <Navigate  to='/' state={{from: location}}/>
  )
}

export default AdminRoute