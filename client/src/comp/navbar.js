import '../styles/nav.css'
import { Link,Navigate } from 'react-router-dom';
import { logout } from '../apiCalls/auth';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import {AiFillBell} from "react-icons/ai";
import Notification from './notification';


const NavBar = () => {
    const [redirect,setRedirect] = useState(false)
    const [user,setUser] = useContext(UserContext)
     const handleLogout= async() =>{
        try{
          const res = await logout()
    
          console.log(res)
          if(res.status)
          { setUser(null)

            setRedirect(true)
          }
    
        }
    
        catch(err){
          console.log(err)
        }
      }


    return ( 
        <>
        {redirect && <Navigate to='/login' />}
        <nav className="nav">
        <h3 className="nav__heading">QuestionBank</h3>
        <div className="nav__links">
            <Link to="/questions" className="nav__link">all questions</Link>
            <Link to="/addQuestion" className="nav__link">Add question</Link>
            <Link to="/findpeople" className="nav__link">Find People</Link>
            <Link to="/dashboard/me" className="nav__link">Dashboard</Link>
        </div>
        
        <div className="nav__action">
        {/* <div className="nav__notification">
        <AiFillBell size={"1.8em"}/>
        </div> */}
            <Notification/>
            <button 
                className="nav__link nav__link--1" 
                onClick={handleLogout}
            >Logout</button>
        </div>
        </nav>
        </>
     );
}
 
export default NavBar;