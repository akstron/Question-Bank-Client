const Search = () => {

// CODE TO MANAGE EVENT ON SEARCH BAR
    let typingTimer;                //timer identifier
    const doneTypingInterval = 1000;  //time in ms (5 seconds)
    

    const handleQuery=(e)=>{
        clearTimeout(typingTimer);
        if (e.target.value) {
        typingTimer = setTimeout(function(){
            requestQuery(e.target.value)
        }, doneTypingInterval);
        }
    }

// REQUEST A QUERY AFTER 1 SEC OF INACTIVITY

    const requestQuery = async (value) => {
        try
        {
            const res = await fetch(`http://localhost:8000/getUsers?question=${value}`,{
            method:'GET',
            credentials: 'include',
            headers: {
                 "Content-Type": "application/json",
               },
            
         })
           const data = await res.json()
           console.log(data)
        }
        
        catch(err){
             console.log(err)
        }
    }

// DESIGN CODE
    return ( 
        <>
        <form className="form">
        <input type="text" name="search" id="search" onChange={handleQuery} />    
        </form>
        </>
     );
}
 
export default Search;