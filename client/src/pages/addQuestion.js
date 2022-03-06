import {useState} from "react"
import '../styles/addquestion.css'

const AddQuestion = () => {
    const [qDetails,setQDetails] = useState(
        {
            name : '',
            url :'',
            notes:'',
            tags:''
        }
    )

    const {name,url,notes,tags} = qDetails

    return ( 

        <main class="aq-container">
       <div class="aq">
        <h2 class="aq__heading"> Add Question </h2>

        <form class="aq__form">

        <div class="aq__input">
        <label for="q-title">Name of the question</label>
        <input 
        type="text" 
        id="q-title" 
        value={name}
        onChange={(e) => {
            setQDetails({...setQDetails,name:e.target.value})
        }}
        required />
        </div>

        <div class="aq__input">
        <label for="q-url">URL</label>
        <input type="text"
         id="q-url"
         value={url}
         onChange={(e) => {
            setQDetails({...setQDetails,url:e.target.value})
        }} 
         required />
        </div>

        <div class="aq__input">
            <label for="q-notes">Notes</label>
            <textarea 
            id="q-notes" 
            value={notes}
            onChange={(e) => {
                setQDetails({...setQDetails,notes:e.target.value})
            }}
            required> </textarea>
        </div>

        <div class="aq__input">
            <label for="q-tags">Add tags</label>
            <textarea 
            id="q-tags" 
            value ={tags}
            onChange={(e) => {
                setQDetails({...setQDetails,tags:e.target.value})
            }}
            required> 
            </textarea>
        </div>
        
        <button type="submit" class="btn btn_submit">Submit </button>
        </form>
        
       </div>
        </main>
     );
}
 
export default AddQuestion;