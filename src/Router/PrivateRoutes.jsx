import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
        return <Navigate to="/sigIn" state={{from:location}}></Navigate>
};

export default PrivateRoutes;