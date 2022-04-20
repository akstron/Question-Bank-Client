import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../apiCalls/question';
import Navbar from '../comp/navbar'
import '../styles/showquestion.css'

const ShowQuestion = () => {
    const {id} = useParams()
    const [details,setDetails] = useState({tags:[]})

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await getQuestionById(id)
                console.log(data)
                if(data.status) setDetails(data.question)
            }
            catch(err) {
                console.log(err)
            }
        }

        fetchData()
    },[])

    const tags = details.tags.map(tag=>{
            return <button key={tag.id} type="button" class="btn aq__dtags__btn">{tag.name} </button>
    })

    return ( 
        <>
           <Navbar/>
           <main class="swq">
            <article class="swq__left">
                <div class="swq__top">
                    <div class="swq__head">
                        <h2 class="swq__heading">
                            {details ? details.name :'' }
                        </h2>

                        <h4 class="swq__difficulty">
                            Difficulty Level :  {details ? details.difficulty :'' }
                        </h4>
                        <div class="swq__edit">
                            <button>
                                Edit
                            </button>
                            <button>
                                delete
                            </button>
                            <button>
                                <a href={details? `${details.url}` :''} target="_blank">Link</a>
                            </button>
                        </div>
                    </div>
                    <p class="swq__shortdetails">
                    {details ? details.description :'' }
                    </p>
                </div>
                <div class="swq__details">
                    <p>
                        {details ? details.notes :'' }
                    </p>
                </div>

                <div class="aq__dtags">
                        {details && tags}
                </div>

            </article>
        </main>
        </>
     );
}
 
export default ShowQuestion;