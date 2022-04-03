import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../apiCalls/auth";
import Loader from "../comp/loader";
import { UserContext } from "../contexts/UserContext";

const CheckUser = ({children}) => {

    const [user, setUser] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    if(!user){
        console.log('user')
        getUser().then((res) => {
            console.log(res)
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

    return user ?  <Navigate to={'/home'}/> : children
}
 
export default CheckUser;