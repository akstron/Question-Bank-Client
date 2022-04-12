import { useEffect, useState } from 'react';
import NavBar from '../comp/navbar';
import '../styles/dash.css'
import { getStats } from '../apiCalls/question';



const DashBoard = () => {

const [stats, setStats] = useState({})
// Gets Stats on first page load
    useEffect(()=>{

        //Setting Query
        const query = [{
            "type":"tag"
        },
        {
            "type":"difficulty"
        }]
        console.log(query)

        // Calling API
        const fetchData = async() =>{
            try{
                const data = await getStats(query);
                console.log(data)

                if(data.status) setStats(data)
            }
    
            catch(err){
                console.log(err)
            }

        }
       fetchData();

    },[])


// MAP STATISTICS

// // const difficultyBG = stats.map((s)=>{
//         return (
//             <span className="graph-barBack">
//             <li className="graph-bar" style={{'width':'28.5%'}}>
//             <span className="graph-legend">Mon</span>
//             </li>
//             </span> 
//         )
// // })


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
                        <div class="dash__fullname">
                            Acoder
                        </div>    
                        <div className="dash__username">
                            @akscoder123
                        </div>
                    </div>

                    <div className="dash__about">
                        <h3 className="dash__about__heading">
                            About
                        </h3>

                    </div>
            </div>
            <div className="dash__right">
                    <div className="dash__difficulty">
                        <h3 className="dash__difficulty_h2">
                            Difficulty Level
                        </h3>
                        <div className="wrap">   
                        <div className="barGraph">
                            <ul className="graph">
                            
                            <span className="graph-barBack">    
                                <li className="graph-bar" style={{'width':'28.5%'}} width="28.5">
                                <span className="graph-legend">Tue</span>
                                </li>
                            </span>
                            
                            <span className="graph-barBack">    
                                <li className="graph-bar" style={{'width':'85%'}} width="28.5">
                                <span className="graph-legend">Tue</span>
                                </li>
                            </span>

                            <span class="graph-barBack">    
                                <li class="graph-bar" data-value="70">
                                <span class="graph-legend">Wed</span>
                                </li>
                            </span>

                            <span class="graph-barBack">    
                                <li class="graph-bar" data-value="50">
                                <span class="graph-legend">Thu</span>
                                </li>
                            </span>

                            <span class="graph-barBack">    
                                <li class="graph-bar" data-value="68">
                                <span class="graph-legend">Fri</span>
                                </li>
                            </span>      
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