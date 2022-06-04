import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { getMe } from "../apiCalls/auth";
import Loader from "../comp/loader";
import { UserContext } from "../contexts/UserContext";

const CheckUser = ({children}) => {

    const [user, setUser] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    if(!user){
        console.log('user')
        getMe().then((res) => {
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
    
    if(isLoading){
        return <Loader/>
    }

    return user ?  <Navigate to={'/home'}/> : children
}
 
export default CheckUser;