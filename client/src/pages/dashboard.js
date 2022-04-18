import { useEffect, useState } from 'react';
import NavBar from '../comp/navbar';
import '../styles/dash.css'
import { getStats } from '../apiCalls/question';



const DashBoard = () => {

const [difficulty, setDifficulty] = useState([])
const [tag, setTag] = useState([])

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
                const data = await getStats(query);
                console.log(data)
                
                if(data.status) {
                    setTag(data.stats[0])
                    setDifficulty(data.stats[1])
                }
            }
    
            catch(err){
                console.log(err)
            }

        }
       fetchData();

    },[])

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