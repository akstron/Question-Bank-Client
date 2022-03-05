//Should add Container styles

import { useState } from "react";

const Login = () => {
// SET STATES
   const [userDetails,setUserDetails]=useState({
       email : '',
       password:''
   })
    
   const {email,password} = userDetails


// HANDLE REQUESTS 
   const handleSubmit = async (e) =>{

       e.preventDefault()
       try
       {
           const res = await fetch("http://localhost:8000/login",{
           method:'POST',
           credentials: 'include',
           headers: {
                "Content-Type": "application/json",
              },
           body: JSON.stringify(userDetails)
        })
          const data = await res.json()
          console.log(data)
          // Display a successfull message on webpage
       }
       
       catch(err){
            console.log(err)
       }
}

// FRONTEND CODE
    return (  
    <main className="ls-container">
    <div className="login">
     <h2 className="login__heading">Login to your account</h2>
     
     <form className="login__form"  onSubmit={handleSubmit}>

     <div className="login__input">
     <label htmlFor="email">Email</label>
     <input 
        type="email" 
        name="email"
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
        name="password" 
        id="password" 
        value={password}
        onChange={(e)=>
            setUserDetails({...userDetails,password:e.target.value})
            }
        required/>
     </div>
     
     <button 
     type="submit" 
     className="btn btn_submit" 
     >
        Login
    </button>
     </form>
     
     <p className="login__text">Do not have an account? 
         <a href="/signup" className="login__link">Create One</a>
     </p>
    </div>
    
    <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="login__image"/>
    </main>
 );
}
 
export default Login;
