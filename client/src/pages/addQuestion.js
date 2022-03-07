import { useState} from "react"
import '../styles/addquestion.css'

const AddQuestion = () => {    

// SETTING STATES
    const [qDetails,setQDetails] = useState(
        {
            name : '',
            url :'',
            notes:'',
            tag:'',
            tagarray:[  ]
        }
    )
    const [error,setError] = useState(false)
    const {name,url,notes,tag,tagarray} = qDetails


// HANDLE FUNCTIONS
const handleTags = () =>{
        const {tagarray,tag} = qDetails

        tag ?
        setQDetails({...qDetails,tagarray:[...tagarray,tag],tag:''})
        :
        setError(true)
}

const handleSubmit = async (e) =>{

    e.preventDefault()
    try
    {
        const res = await fetch("http://localhost:8000/addQuestion",{
        method:'POST',
        credentials: 'include',
        headers: {
             "Content-Type": "application/json",
           },
        body: JSON.stringify(qDetails)
     })
       const data = await res.json()
       console.log(data)
       // Display a successfull message on webpage
    }
    
    catch(err){
         console.log(err)
    }
}

// CREATE TAGS
    const tagNames = tagarray.map((value,index) => {
    return (
    <button 
    type="button" 
    key ={index} 
    id={index}
    className="btn aq__dtags__btn">
        {value} 
        <span onClick={(e) => {
            const {tagarray} = qDetails
            tagarray.splice(e.target.parentElement.id,1)
            setQDetails({...qDetails,tagarray})
        }}> 
        &#x2715;
        </span>
    </button>)
    })
   
    return ( 

    <main className="aq-container">
       <div className="aq">
        <h2 className="aq__heading"> Add Question </h2>

        <form className="aq__form" onSubmit={handleSubmit}>

        <div className="aq__input">
        <label htmlFor="q-title">Name of the question</label>
        <input 
        type="text" 
        id="q-title" 
        value={name}
        onChange={(e) => {
            setQDetails({...qDetails,name:e.target.value})
        }}
        required />
        </div>

        <div className="aq__input">
        <label htmlFor="q-url">URL</label>
        <input type="text"
         id="q-url"
         value={url}
         onChange={(e) => {
            setQDetails({...qDetails,url:e.target.value})
        }} 
         required />
        </div>

        <div className="aq__input">
            <label htmlFor="q-notes">Notes</label>
            <textarea 
            id="q-notes" 
            value={notes}
            onChange={(e) => {
                setQDetails({...qDetails,notes:e.target.value})
            }}
            required> </textarea>
        </div>

        <div className="aq__tag">
            <div className="aq__tag__form">
            <label htmlFor="q-tags">Add tags {error && !tag &&<span>&#160;&#160;tag cannot be empty</span> }</label>
            <input 
            type="text" 
            id="q-tags" 
            value={tag}
            onChange={(e) => {
                setQDetails({...qDetails,tag:e.target.value})
                setError(false)
            }}
            /> 
            </div>
            <button 
            type="button" 
            className="btn aq__tag__btn"
            onClick={handleTags}
            >
            Add Tag</button>
        </div>
        
       
       <div className="aq__dtags">
          {tagNames}
        </div>
        
        <button type="submit" className="btn btn_submit">Submit </button>
        </form>
        
       </div>
        </main>
     );
}
 
export default AddQuestion;