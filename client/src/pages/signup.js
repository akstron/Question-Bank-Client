//Should add Container styles

import { useState } from "react";

const SignUp = () => {

    const [userDetails,setUserDetails] = useState(
        {
            'fullname':'',
            username:'',
            email:'',
            password:'',
            bio:''
        }
    )
    return ( 
    <main class="ls-container">
    <div class="login">
     <h2 class="login__heading">Create your account</h2>
     
     <form class="login__form">
     
     <div class="login__input">
     <label for="fullname">full name</label>
     <input type="text" name="fullname" id="fullname" required/>
     </div>

     <div class="login__input">
     <label for="username">username</label>
     <input type="text" name="username" id="username" required/>
     </div>

     <div class="login__input">
         <label for="email">email</label>
         <input type="email" name="email" id="email" required/>
     </div>

     <div class="login__input">
     <label for="password">Password</label>
     <input type="password" name="password" id="password" required/>
     </div>

     <div class="login__input">
         <label for="bio">bio</label>
         <input type="text" name="bio" id="bio"/>
     </div>
     
     <button type="submit" class="btn btn_submit">Login</button>
     </form>
     
     <p class="login__text">Already have an account?
         <a href="./index.html" class="login__link">Login</a>
     </p>
    </div>
    
    <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="login__image"/>
</main> );
}
 
export default SignUp;
