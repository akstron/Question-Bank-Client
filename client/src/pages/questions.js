import Search from "../comp/search"
import Cards from "../comp/cards"
import '../styles/questions.css'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Questions = () => {
  const [user,setUser] = useContext(UserContext)

    return (  
      <>
         <div className="db__container">
            <aside className="db__aside">
                <h3 className="db__heading">
                    QuestionBank
                </h3>
                <Search/>
            </aside>

            <main className="db__main">
              <div className="db__main__nav">
                  <Link to="/login" className="nav__link nav__link--1" onClick={()=>{
                    setUser({})
                  }}>Logout</Link>
              </div>

              <Cards/>
            </main>
          </div>
      </>
    );
}
 
export default Questions;