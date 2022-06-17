import { useContext, useEffect, useState } from 'react';
import NavBar from '../comp/navbar';
import { useParams } from 'react-router-dom';
import '../styles/dash.css'
import { getStats } from '../apiCalls/question';
import { UserContext } from '../contexts/UserContext';
import Loader from '../comp/loader';
import { getUser, removeFriend, respondFriendRequest, sendFriendRequest, unsendFriendRequest } from '../apiCalls/user';
import Modal from '../comp/modal';

const getFriendButtonText = (friendshipStatus) => {
    if(friendshipStatus === 'friend'){
        return 'Friend';
    }
    if(friendshipStatus === 'not friend'){
        return 'Send friend request';
    }
    if(friendshipStatus === 'friend request sent'){
        return 'Friend request sent';
    }
    return 'Pending friend request';
}

const DashBoard = () => {
    const {userId} = useParams();
    const [difficulty, setDifficulty] = useState([]);
    const [tag, setTag] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null); 
    const [friendButtonText, setFriendButtonText] = useState('not friend');
    const [friendRequestResponseModalVisibility, setFriendRequestResponseModalVisibility] = useState(false);
    const [removeFriendModalVisibility, setRemoveFriendModalVisibility] = useState(false);

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
                    setFriendButtonText(getFriendButtonText(user.user.friendshipStatus));
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


    /* 
        Handle Friend button click here
        TODO: Handle other cases as well
    */
    const handleFriendButtonClick = async () => {
        try{
            if(user.friendshipStatus === 'not friend'){
                await sendFriendRequest(user.id);
                const newUser = user;
                newUser.friendshipStatus = 'friend request sent';
                setUser(newUser);
                setFriendButtonText(getFriendButtonText(newUser.friendshipStatus));
            } else if(user.friendshipStatus === 'friend request received'){
                await setFriendRequestResponseModalVisibility(true);
            } else if(user.friendshipStatus === 'friend request sent'){
                await unsendFriendRequest(user.id);
                const newUser = user;
                newUser.friendshipStatus = 'not friend';
                setUser(newUser);
                setFriendButtonText(getFriendButtonText(newUser.friendshipStatus));
            } else {
                setRemoveFriendModalVisibility(true);
            }
        } catch(e){
            console.log(e);
        }
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
                        <button onClick={() => handleFriendButtonClick()}>
                            {
                                friendButtonText
                            }
                        </button>
                        {friendRequestResponseModalVisibility&&<Modal
                            id={'modal-friend-reqest-response'}
                            content={'Accept friend request?'}
                            positiveText={'Accept'}
                            negativeText={'Decline'}
                            onCloseClick={() => setFriendRequestResponseModalVisibility(false)}
                            onPositiveClick={async () => {
                                await respondFriendRequest(userId, 'accept')
                                setFriendRequestResponseModalVisibility(false);
                                user.friendshipStatus = 'friend';
                                setUser(user);
                                setFriendButtonText(getFriendButtonText(user.friendshipStatus));
                            }}
                            onNegativeClick={async () => {
                                await respondFriendRequest(userId, 'reject')
                                setFriendRequestResponseModalVisibility(false);
                                user.friendshipStatus = 'not friend';
                                setUser(user);
                                setFriendButtonText(getFriendButtonText(user.friendshipStatus));
                            }}
                        />}

                        {removeFriendModalVisibility && <Modal
                            id={'modal-remove-friend'}
                            content={'Unfriend?'}
                            positiveText={'Yes'}
                            negativeText={'No'}
                            onCloseClick={() => setRemoveFriendModalVisibility(false)}
                            onPositiveClick={async () => {
                                await removeFriend(user.id);
                                user.friendshipStatus = 'not friend';
                                setUser(user);
                                setFriendButtonText(getFriendButtonText(user.friendshipStatus));
                                setRemoveFriendModalVisibility(false);
                            }}
                            onNegativeClick={() => setRemoveFriendModalVisibility(false)}
                        />}

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