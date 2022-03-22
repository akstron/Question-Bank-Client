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
                      <input type="text" id="" class="db__input" placeholder="Search by Tag"/>
                      <button type="button" class="btn db__btn">
                        Add Tag
                      </button>
                    </div>

                    <div class="db__tags">
                      <button type="button" class="btn db__tags__btn"> Structures <span> &#x2715;</span></button>
                      <button type="button" class="btn db__tags__btn">Architecture <span> &#x2715;</span> </button>
                      <button type="button" class="btn db__tags__btn">Dynamic <span> &#x2715;</span> </button>
                      <button type="button" class="btn db__tags__btn">Architecture <span> &#x2715;</span> </button>
                      <button type="button" class="btn db__tags__btn">Dynamic <span> &#x2715;</span> </button>
                      
                    </div>

                    <button type="submit" class="btn db__refresh">
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