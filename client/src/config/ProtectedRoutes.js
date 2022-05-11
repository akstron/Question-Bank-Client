import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../apiCalls/auth";
import { UserContext } from "../contexts/UserContext";
import Loader from '../comp/loader'

const ProtectedRoutes = ({children}) => {

    const [user, setUser] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    if(!user){
        
        getUser().then((res) => {
            if(res.status) {
                setUser(res.user);
            }
            setIsLoading(false)
        })
        .catch((e) => {
            console.log(e);
            setIsLoading(false);
        });
    } else {
        if(isLoading) setIsLoading(false);
    }
    
    /**
     * TODO: Add a loading page
     */
    if(isLoading){
        return <Loader/>
    }

    return user ? children : <Navigate to={'/login'} />
}
 
export default ProtectedRoutes;