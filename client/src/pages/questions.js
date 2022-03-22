import Search from "../comp/search"
import Cards from "../comp/cards"
import '../styles/questions.css'

const Questions = () => {
    return (  
      <>
         <div class="db__container">
            <aside class="db__aside">
                <h3 class="db__heading">
                    QuestionBank
                </h3>
                <Search/>
            </aside>

            <main class="db__main">
              <div class="db__main__nav">
                  <a href="/" class="nav__link nav__link--1">Logout</a>
              </div>

              <Cards/>
            </main>
          </div>
      </>
    );
}
 
export default Questions;