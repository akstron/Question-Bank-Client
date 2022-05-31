import { useContext, useEffect, useState } from 'react';
import NavBar from '../comp/navbar';
import { useParams } from 'react-router-dom';
import '../styles/dash.css'
import { getStats } from '../apiCalls/question';
import { UserContext } from '../contexts/UserContext';
import Loader from '../comp/loader';
import { getUser } from '../apiCalls/user';


const DashBoard = () => {
    const {userId} = useParams();
    const [difficulty, setDifficulty] = useState([]);
    const [tag, setTag] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null); 
    const [loggedInUser] = useContext(UserContext);
    // console.log(user)
    // console.log('loggedInUser', loggedInUser);

    // Gets Stats on first page load
    useEffect(()=>{

        //Setting Query
        const query = [{
            "type":"tag"
        },
        {
            "type":"difficulty"
        }]

        // Calling API
        const fetchData = async() =>{
            try{
                const data = await getStats(userId, query);
                const user = await getUser(userId);
                console.log(data)
                
                if(data.status && user.status) {
                    setUser(user.user);
                    setTag(data.stats[0]);
                    setDifficulty(data.stats[1]);
                    setIsLoading(false);
                }
            }
    
            catch(err){
                console.log(err)
            }

        }
       fetchData();

    },[]);

    if(isLoading){
        return <Loader/>
    }

    let dsum = difficulty.reduce((s,b) => s+parseInt(b.count),0)
    let tsum = tag.reduce((s,b) => s+parseInt(b.count),0)


    const difficultyGraph = difficulty.map((s)=>{
        
        return (
            <span className="graph-barBack" key={s.id}>
            <li className="graph-bar" style={{'width':`${s.count*100/dsum}%`}} width={s.count}>
            <span className="graph-legend">{s.difficulty}</span>
            </li>
            </span> 
        )
    })

    const tagGraph = tag.map((s)=>{
        
        return (
            <span className="graph-barBack" key={s.tagId}>
            <li className="graph-bar" style={{'width':`${s.count*100/tsum}%`}} width={s.count}>
            <span className="graph-legend tag">{s.TagName}</span>
            </li>
            </span> 
        )
    })

    const getFriendButtonText = () => {
        if(user.friendshipStatus === 'friend'){
            return 'Friend';
        }
        if(user.friendshipStatus === 'not friend'){
            return 'Send friend request';
        }
        if(user.friendshipStatus === 'friend request sent'){
            return 'Friend request sent';
        }
        return 'Accept friend request';
    }
    
// DESIGN CODE
    return ( 
        <>
        <NavBar/>
        <main className="dash__container">
            <div className="dash__left">
                    <div className="dash__user">
                        <div class="dash__name">
                            A
                        </div>
                        <button>
                            {
                                getFriendButtonText()
                            }
                        </button>
                        <div class="dash__fullname">
                            {user.fullName}
                        </div>    
                        <div className="dash__username">
                            @{user.username}
                        </div>
                    </div>

                    <div className="dash__about">
                        <h3 className="dash__about__heading">
                            About
                        </h3>
                        <p>
                            {user.bio}
                        </p>
                    </div>
            </div>
            <div className="dash__right">
                    <div className="dash__difficulty">
                        <h3 className="dash__difficulty_h2">
                            Difficuty Level
                        </h3>
                        <div className="wrap">   
                        <div className="barGraph">
                            <ul className="graph">
                            
                            {difficultyGraph}
                            
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="dash__difficulty">
                        <h3 className="dash__difficulty_h2">
                            TagName Vs Count
                        </h3>
                        <div className="wrap">   
                        <div className="barGraph">
                            <ul className="graph">
                            
                            {tagGraph}
                            
                            </ul>
                        </div>
                        </div>
                    </div>
            </div>
        </main> 
        </>
     );
}
 
export default DashBoard;