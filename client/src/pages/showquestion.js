import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../apiCalls/question';
import Navbar from '../comp/navbar'
import '../styles/showquestion.css'
import { AiOutlineEdit,AiFillDelete,AiOutlineLink,AiOutlineShareAlt} from "react-icons/ai";

const ShowQuestion = () => {
    const {id} = useParams()
    const [details,setDetails] = useState({tags:[]})
    const [edit,setEdit]= useState(false)
    const [del,setDel] = useState(false)
    


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
            return <button key={tag.id} type="button" className="btn aq__dtags__btn">{tag.name} </button>
    })

    return ( 
        <>
           <Navbar/>
           <main className="swq">
            <article className="swq__left">
                <div className="swq__top">
                    <div className="swq__head">
                        <h2 className="swq__heading">
                            {details ? details.name :'' }
                        </h2>

                        <h4 className="swq__difficulty">
                            Difficulty Level :  {details ? details.difficulty :'' }
                        </h4>
                        <div className="swq__edit">
                            <button className='icons' onClick={() => setEdit(!edit)}>
                                <AiOutlineEdit size={"1.8em"} title={"edit"} />
                            </button>
                            <a className='icons' href="#open-modal">
                                <AiFillDelete size={"1.8em"} title={"delete"} color={"#c53333"}/>
                            </a>

                            <div id="open-modal" class="modal-window">
                            <div>
                                <a href="#" title="Close" class="modal-close">Close</a>
                                <h4>Are you sure you want to delete this question?</h4>
                                <div>
                                    <button className='btn' >
                                        YES
                                    </button>
                                    <button className='btn'>
                                        CANCEL
                                    </button>
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
                    <p className="swq__shortdetails">
                    {details ? details.description :'' }
                    </p>
                </div>
                <div className="swq__details">
                        {
                            edit ? <span >
                                Press Enter for new submission
                            </span> : ""
                        }
                        {edit? 
                        <form className="aq__form showquestion">
                            <textarea cols={200} rows={30} name="" id="" value={details.notes} onChange={(e)=>{
                                setDetails({...details,notes:e.target.value})
                            }}/>
                        </form>
                        : 
                        <p>
                           { details ? details.notes :''} 
                        </p>}
                       
                </div>

                <div className="aq__dtags">
                        {details && tags}
                </div>

            </article>
        </main>
        </>
     );
}
 
export default ShowQuestion;