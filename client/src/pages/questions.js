import Search from "../comp/search"
import Cards from "../comp/cards"
import '../styles/questions.css'
import { Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getQuestion } from "../apiCalls/question";
import { logout } from "../apiCalls/auth";

const Questions = () => {
  const [user,setUser] = useContext(UserContext)
  const [redirect,setRedirect] = useState(false)


  // handleLogout

  const handleLogout= async() =>{
    console.log('inside')

    try{
      const res = await logout()

      console.log(res)
      if(res.status)
     { setUser(null)
       setRedirect(true)
     }

      else{
        console.log(res)
      }
    }

    catch(err){
      console.log(err)
    }
  }
  // Fetch All Questions when the components first renders
  useEffect(()=>{
    const fetchData = async() =>{
    try
    {    
           const data = await getQuestion()
           console.log(data)
           
           if(!data.status) console.log(data.error)
           
     }

     catch (err){
       console.log(err)

     }
    }
    fetchData();

  },[])

    return (  
      <>
        {redirect && <Navigate to='/login' />}
         <div className="db__container">
            <aside className="db__aside">
                <h3 className="db__heading">
                    QuestionBank
                </h3>
                <Search/>
            </aside>

            <main className="db__main">
              <div className="db__main__nav">
                  <button 
                      className="nav__link nav__link--1" 
                      onClick={handleLogout}>
                      Logout
                  </button>
              </div>

              <Cards/>
            </main>
          </div>
      </>
    );
}
 
export default Questions;