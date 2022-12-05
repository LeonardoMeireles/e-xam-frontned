import {Outlet, Navigate, useLocation} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../AuthContext";

const ProfessorRoute = () => {
  const {user} = useContext(AuthContext);
  const location = useLocation();
  return (
    user.role === 'PROFESSOR' ? <Outlet/> : <Navigate  to='/' state={{from: location}}/>
  )
}

export default ProfessorRoute