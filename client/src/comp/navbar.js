import '../styles/nav.css'
import { Link,Navigate } from 'react-router-dom';
import { logout } from '../apiCalls/auth';
import { useState } from 'react';

const NavBar = () => {
    const [redirect,setRedirect] = useState(false)
    const handleLogout= async() =>{
        try{
          const res = await logout()
    
          console.log(res)
          if(res.status)
          setRedirect(true)
    
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
        </div>
        
        <div className="nav__action">
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