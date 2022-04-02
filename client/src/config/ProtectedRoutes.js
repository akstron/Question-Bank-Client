import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoutes = ({children}) => {

    const [user, setUser] = useContext(UserContext);
    
    return user ? children : <Navigate to={'/login'} />
}
 
export default ProtectedRoutes;