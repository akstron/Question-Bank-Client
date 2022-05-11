import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSearchedAndTaggedQuestions,getSearchedQuestions } from "../apiCalls/question";
import { UserContext } from "../contexts/UserContext";

const Search = ({searchResults}) => {

  const [qDetails, setQDetails] = useState({
    question:"",
    tag: "",
    tagarray: [],
  });

  const [error, setError] = useState(false);
  const {question,tag, tagarray } = qDetails;
  const [user] = useContext(UserContext)

  // Clear Filters
  const clearTags=()=>{
    setQDetails({tag:"",tagarray:[]})
  }

 // CODE TO MANAGE EVENT ON SEARCH BAR
    let typingTimer;                //timer identifier
    const doneTypingInterval = 1000;  //time in ms (5 seconds) 

// REQUEST A QUERY AFTER 1 SEC OF INACTIVITY

const requestQuery = async() => {
  
  const {tagarray} = qDetails
  
    if(tagarray.length){
      try{
        console.log(tagarray)
        const data = await getSearchedAndTaggedQuestions(question,tagarray)
  
        console.log(data)
        if(data.status)
        searchResults(data)
      }
        catch(err){
            console.log(err)
        }
    }
  
    else{
      try{
  
        const data = await getSearchedQuestions(question)
  
        console.log(data)
        if(data.status)
        searchResults(data)
      }
        catch(err){
            console.log(err)
        }
    }     
  }

  useEffect(()=>{
    requestQuery()
  },[question,tagarray])
      
//handle Tags
    const handleTags = () => {
          const { tagarray, tag } = qDetails;
  
          tag
              ? setQDetails({ ...qDetails, tagarray: [...tagarray, tag], tag: "" })
              : setError(true);
          requestQuery()
    };

    //create tags
    const tagNames = tagarray.map((value, index) => {
          return (
              <button
                  type="button"
                  key={index}
                  id={index}
                  className="btn db__tags__btn"
              >
                  {value}
                  <span
                      onClick={(e) => {
                          const { tagarray } = qDetails;
                          tagarray.splice(e.target.parentElement.id, 1);
                          setQDetails({ ...qDetails, tagarray });
                      }}
                  >
                      &#x2715;
                  </span>
              </button>
          );
    });
  
    return ( 
        <>
        <article className="db__func">
                <h4 className="db__user">
                    hi, {user.fullName}
                    <span>&#9734;</span>                    
                </h4>
                <div className="db__searchbox">
                    
                    <input 
                        type="text"  
                        className="db__input"
                        placeholder="Search by question"
                        onChange={(e) => {
                            clearTimeout(typingTimer);
                                typingTimer = setTimeout(()=>{
                                  setQDetails({...qDetails, question:e.target.value})
                                }, doneTypingInterval);
                                
                          }}
                    />
                    
                    <div className="db__tag">
                      <input 
                          type="text" 
                          id="tag" 
                          className="db__input" 
                          placeholder="Search by Tag"
                          value={tag}
                          onChange={(e) => {
                            setQDetails({ ...qDetails, tag: e.target.value });
                            setError(false);
                          }}
                          />
                      <button 
                          type="button" 
                          className="btn db__btn"
                          onClick={handleTags}>
                        Add Tag
                      </button>
                    </div>
                    {error && !tag && <span>&#160;&#160;tag cannot be empty</span>}     
                    <div className="db__tags">
                      {tagNames}
                    </div>

                    
                    <button type="submit" className="btn db__clear" onClick={clearTags}>
                     Clear Tags
                    </button>
                </div>
                <Link to='/addQuestion' className="btn db__addquestion">
                  Add Question
                </Link>
            </article>
        </>
     );
}
 
export default Search;