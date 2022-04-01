import { useState } from "react";

const Search = () => {

// // CODE TO MANAGE EVENT ON SEARCH BAR
//     let typingTimer;                //timer identifier
//     const doneTypingInterval = 1000;  //time in ms (5 seconds)
    

//     const handleQuery=(e)=>{
//         clearTimeout(typingTimer);
//         if (e.target.value) {
//         typingTimer = setTimeout(function(){
//             requestQuery(e.target.value)
//         }, doneTypingInterval);
//         }
//     }

// // REQUEST A QUERY AFTER 1 SEC OF INACTIVITY

//     const requestQuery = async (value) => {
//         try
//         {
//             const res = await fetch(`http://localhost:8000/getUsers?question=${value}`,{
//             method:'GET',
//             credentials: 'include',
//             headers: {
//                  "Content-Type": "application/json",
//                },
            
//          })
//            const data = await res.json()
//            console.log(data)
//         }
        
//         catch(err){
//              console.log(err)
//         }
//     }

// DESIGN CODE
          
    const [qDetails, setQDetails] = useState({
      question:"",
      tag: "",
      tagarray: [],
    });

    const [error, setError] = useState(false);
    const { tag, tagarray } = qDetails;

    //handleSubmit

    const handleSubmit = async (e) => {
      e.preventDefault();

      // CALL API

      // try {
      //     const data = await addQuestion(qDetails);
      //     console.log(data);
      // } catch (err) {
      //     console.log(err);
      // }
  };

    //handle Tags
    const handleTags = () => {
          const { tagarray, tag } = qDetails;
  
          tag
              ? setQDetails({ ...qDetails, tagarray: [...tagarray, tag], tag: "" })
              : setError(true);
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
        <article class="db__func">
                <h4 class="db__user">
                    hi, user 
                    <span>&#9734;</span>                    
                </h4>
                <div class="db__searchbox">
                    
                    <input type="text" id="" class="db__input" placeholder="Search by question"/>
                    
                    <div class="db__tag">
                      <input 
                          type="text" 
                          id="tag" 
                          class="db__input" 
                          placeholder="Search by Tag"
                          value={tag}
                          onChange={(e) => {
                            setQDetails({ ...qDetails, tag: e.target.value });
                            setError(false);
                          }}
                          />
                      <button 
                          type="button" 
                          class="btn db__btn"
                          onClick={handleTags}>
                        Add Tag
                      </button>
                    </div>

                    <div class="db__tags">
                      {tagNames}
                    </div>

                    <button 
                        type="submit" 
                        class="btn db__refresh"
                        onSubmit={handleSubmit}
                        >
                      Refresh Results
                    </button>
                    <button type="submit" class="btn db__clear">
                     Clear Filters
                    </button>
                </div>
                <button type="button" class="btn db__addquestion">
                  Add Question
                </button>
            </article>
        </>
     );
}
 
export default Search;