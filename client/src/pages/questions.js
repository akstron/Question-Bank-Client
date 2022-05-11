import Search from "../comp/search"
import Cards from "../comp/cards"
import '../styles/questions.css'
import { useEffect, useState } from "react";
import { getQuestion } from "../apiCalls/question";
import NavBar from "../comp/navbar";

const Questions = () => {
    const [questions,setQuestions] = useState([])
    
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
      
    // Fetch All Questions when the components first renders
    

    

    const searchResults = (results)=>{
      
      if(results.questions)
      setQuestions(results.questions)

    }

    return (  
      <>
        <NavBar/>
         <div className="db__container">
            <aside className="db__aside">
                <Search searchResults={searchResults}/>
            </aside>

            <main className="db__main">
              <Cards questions={questions}/>
            </main>
          </div>
      </>
    );
}
 
export default Questions;