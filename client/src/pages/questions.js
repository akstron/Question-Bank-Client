import Search from "../comp/search"
import Cards from "../comp/cards"
import '../styles/questions.css'
import { Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getQuestion } from "../apiCalls/question";
import { logout } from "../apiCalls/auth";
import NavBar from "../comp/navbar";

const Questions = () => {
    const [questions,setQuestions] = useState([])
    // Fetch All Questions when the components first renders
    useEffect(()=>{
      const fetchData = async() =>{
      try
      {    
             const data = await getQuestion()
             console.log(data)
             
             if(data.status) setQuestions(data.questions)
             
       }
  
       catch (err){
         console.log(err)
  
       }
      }
      fetchData();
  
    },[])  


    return (  
      <>
        <NavBar/>
         <div className="db__container">
            <aside className="db__aside">
                <Search/>
            </aside>

            <main className="db__main">
              <Cards questions={questions}/>
            </main>
          </div>
      </>
    );
}
 
export default Questions;