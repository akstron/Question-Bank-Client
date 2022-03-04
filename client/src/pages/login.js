//Should add Container styles

const Login = () => {
    return (  
    <main className="ls-container">
    <div className="login">
     <h2 className="login__heading">Login to your account</h2>
     
     <form className="login__form">

     <div className="login__input">
     <label htmlFor="email">Email</label>
     <input type="email" name="email" id="email" required/>
     </div>

     <div className="login__input">
     <label htmlFor="password">Password</label>
     <input type="password" name="password" id="password" required/>
     </div>
     
     <button type="submit" className="btn btn_submit">Login</button>
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
