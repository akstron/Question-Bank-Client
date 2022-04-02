import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../apiCalls/auth";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoutes = ({children}) => {

    const [user, setUser] = useContext(UserContext);
    if(!user){
                getUser().then((res) => {
                   if(res.status) setUser(res.user);
                })
                .catch((e) => console.log(e));
    }
    
    return user ? children : <Navigate to={'/login'} />
}
 
export default ProtectedRoutes;