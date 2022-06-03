import AddQuestion from "./addQuestion";
import { useParams } from "react-router-dom";
import { getQuestionById } from '../apiCalls/question';
import { useEffect, useState } from 'react';


// MOST EDIT FUNCTIONALITY IS COMBINED WITH ADD QUESTION PAGE

const EditQuestion = () => {
    const {id} = useParams()
    const [details,setDetails] = useState(
    {   name: "",
        url: "",
        description:"",
        difficulty:"",
        notes: "",
        tags: [],
    })
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



    console.log(details)
    return (  
        <>
        <AddQuestion text={"Edit"} states={details}/>
        </>
    );
}
 
export default EditQuestion;