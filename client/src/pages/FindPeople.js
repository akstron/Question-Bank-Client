import { useState } from 'react';
import NavBar from '../comp/navbar';
import '../styles/findpeople.css'
import {AiOutlineSearch} from "react-icons/ai";

const FindPeople = () => {

const [active,setActive] = useState(true)

    return ( 
        <>
        <NavBar/>
        <div className="find">
            <div className="find__search">
                <input type="text" name="find" id="find" className="find__people" placeholder="Find People"/>
                <AiOutlineSearch size={"1.8em"} className="searchicon" />
                
                <button 
                className={`btn find__btn ${active ? "find__btn__active":''}`}
                onClick={()=> setActive(true)}
                >
                Global
                </button>

                <button 
                className={`btn find__btn ${!active ? "find__btn__active":''}`}
                onClick={()=> setActive(false)}
                >
                
                Friends
                </button>

            </div>
            <div className="user__card">
                <div className="user">
                    <div className="user__id">
                        1
                    </div>
                    <div className="user__photo">
                        A
                    </div>
                    <div className="user__name">
                        @johndaye
                    </div>
                    <div className="user__fullname">
                        John Daye
                    </div>
                </div>
    
                <div className="user">
                    <div className="user__id">
                        2
                    </div>
                    <div className="user__photo">
                        B
                    </div>
                    <div className="user__name">
                        @johndaye
                    </div>
                    <div className="user__fullname">
                        John Daye
                    </div>
                </div>
            </div>
           
        </div>
        </>
     );
}
 
export default FindPeople;