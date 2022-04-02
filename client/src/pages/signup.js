import { useState } from "react";
import '../styles/login.css'
import { Navigate,Link } from "react-router-dom";
import { register } from "../apiCalls/auth";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const SignUp = () => {

//SET STATES
    const [userDetails,setUserDetails] = useState(
        {
            fullName:'',
            username:'',
            email:'',
            password:'',
            bio:''
        }
    )
    const [err,setError]= useState('')
    const [redirect,setRedirect] = useState(false)
    const {fullName,username,email,password,bio} = userDetails

    // Global States
    const [user, setUser] = useContext(UserContext);

    // HANDLE REQUESTS 
   const handleSubmit = async (e) =>{

    e.preventDefault()
     try
     {
    //     const res = await fetch("http://localhost:8000/register",{
    //     method:'POST',
    //     credentials: 'include',
    //     headers: {
    //          "Content-Type": "application/json",
    //        },
    //     body: JSON.stringify(userDetails)
            const data = await register(userDetails)
            console.log(data)

            if(!data.status) setError(data.error)
            else {
                setUser(() => data.user);
                setRedirect(true)
            }
      }

      catch (err){
        console.log(err)
        setError(err)
      }
    }

    return ( 
    <>
    {redirect && <Navigate to='/home'/>}
    <main className="ls-container">
    <div className="login">
    <h2 className="login__heading">Create your account</h2>
     
     <form className="login__form" onSubmit={handleSubmit}>
     
     <div className="login__input">
        <label htmlFor="fullName">full name</label>
        <input 
        type="text"
        id="fullName" 
        value={fullName}
        onChange={(e)=>
            setUserDetails({...userDetails,fullName:e.target.value})
        }
        required/>
     </div>

     <div className="login__input">
     <label htmlFor="username">user name</label>
     <input 
      type="text" 
      id="username" 
      value={username}
      onChange={(e)=>
            setUserDetails({...userDetails,username:e.target.value})
        }
      required/>
     </div>

     <div className="login__input">
         <label htmlFor="email">email</label>
         <input 
         type="email"
         id="email" 
         value={email}
         onChange={(e)=>
            setUserDetails({...userDetails,email:e.target.value})
        }
         required/>
     </div>

     <div className="login__input">
     <label htmlFor="password">Password</label>
     <input 
     type="password" 
     id="password" 
     value={password}
        onChange={(e)=>
            setUserDetails({...userDetails,password:e.target.value})
        }
     required/>
     </div>

     <div className="login__input">
         <label htmlFor="bio">bio</label>
         <input 
         type="text" 
         id="bio"
         value={bio}
         onChange={(e)=>
                setUserDetails({...userDetails,bio:e.target.value})
            }
         />
     </div>
     
     <button type="submit" className="btn btn_submit">Login</button>
     </form>
     
     <p className="login__error">  {err} </p>

     <p className="login__text">Already have an account? &#160;
         <Link to="/" className="login__link">SignUp</Link>
     </p>
    </div>
    
    <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="login__image"/>
    </main>
    </>
     )

}
 
export default SignUp;
