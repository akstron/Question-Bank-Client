import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { deleteQuestion, getQuestionById } from '../apiCalls/question';
import Navbar from '../comp/navbar'
import '../styles/showquestion.css'
import { AiOutlineEdit,AiFillDelete,AiOutlineLink,AiOutlineShareAlt} from "react-icons/ai";
const ShowQuestion = () => {
    const {id} = useParams()
    const [details,setDetails] = useState({tags:[]})
    const navigate = useNavigate()

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

    const del = async ()=>{
        
        try{
            const data = await deleteQuestion(id)
            console.log(data)
            if(data.status) 
            navigate('/questions')
        }
        catch(err) {
            console.log(err)
        }
    }
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
                        <div className="swq__edit">
                            <Link className='icons' to={`/editQuestion/${id}`}>
                                <AiOutlineEdit size={"1.8em"} title={"edit"} />
                            </Link>
                            <a className='icons' href="#open-modal">
                                <AiFillDelete size={"1.8em"} title={"delete"} color={"#c53333"}/>
                            </a>

                            <div id="open-modal" class="modal-window">
                            <div>
                                <a href="#" title="Close" class="modal-close">Close</a>
                                <h4>Are you sure you want to delete this question?</h4>
                                <div>
                                    <button className='btn' onClick={del} >
                                        YES
                                    </button>
                                    <a className='btn' href='#'>
                                        CANCEL
                                    </a>
                                </div>
                                
                            </div>
                            </div>
                        
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
                <div className="swq__details">
                        <p>
                           { details ? details.notes :''} 
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