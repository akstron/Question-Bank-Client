import { useParams } from 'react-router-dom';
import Navbar from '../comp/navbar'
import '../styles/showquestion.css'

const ShowQuestion = () => {
    const {id} = useParams()
    console.log(id)
    // CAN BE DONE BOTH USING PROPS OR PARAMS
    
    return ( 
        <>
           <Navbar/>
           <main class="swq">
            <article class="swq__left">
                <div class="swq__top">
                    <div class="swq__head">
                        <h2 class="swq__heading">
                            Question Title
                        </h2>

                        <h4 class="swq__difficulty">
                            Difficulty Level : 10
                        </h4>
                        <div class="swq__edit">
                            <button>
                                Edit
                            </button>
                            <button>
                                delete
                            </button>
                            <button>
                                Link
                            </button>
                        </div>
                    </div>
                    <p class="swq__shortdetails">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corrupti inventore nulla expedita vitae possimus sed eveniet suscipit, est veritatis ipsa nihil ea sit omnis ullam architecto in incidunt temporibus!
                    </p>
                </div>
                <div class="swq__details">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime possimus suscipit aliquam earum, mollitia velit sunt in nihil sit quae voluptatibus nobis exercitationem, aliquid repellendus quos asperiores alias unde.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi illum fuga deleniti sequi a molestiae quo inventore illo sint vel dolore, facilis nemo labore, quia ipsum iste beatae veritatis!
                    </p>
                </div>

                <div class="aq__dtags">
            
                    <button type="button" class="btn aq__dtags__btn">Data Structures <span> &#x2715;</span></button>
                    <button type="button" class="btn aq__dtags__btn">Architecture <span> &#x2715;</span> </button>
                    <button type="button" class="btn aq__dtags__btn">Dynamic Programming <span> &#x2715;</span> </button>
                    <button type="button" class="btn aq__dtags__btn">Allied courses <span> &#x2715;</span></button>
                    <button type="button" class="btn aq__dtags__btn">Algorithm<span> &#x2715;</span></button>
                </div>

            </article>
        </main>
        </>
     );
}
 
export default ShowQuestion;