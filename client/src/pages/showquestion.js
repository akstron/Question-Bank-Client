import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../apiCalls/question';
import Navbar from '../comp/navbar'
import '../styles/showquestion.css'
import { AiOutlineEdit,AiFillDelete,AiOutlineLink,AiOutlineShareAlt} from "react-icons/ai";
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
                            <button className='icons'>
                                <AiOutlineEdit size={"1.8em"} title={"edit"} />
                            </button>
                            <button className='icons'>
                                <AiFillDelete size={"1.8em"} title={"delete"} color={"#c53333"}/>
                            </button>
                            <button className='icons'>
                                <a href={details? `${details.url}` :''} target="_blank">
                                    <AiOutlineLink size={"1.8em"} title={"Question Link"}/>
                                </a>
                            </button>
                            <button className='icons'>
                                <AiOutlineShareAlt size={"1.8em"} title={"share"}/>
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