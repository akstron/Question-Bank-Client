
const Cards = ({questions}) => {
    console.log(questions)

    const questionMP = questions.map((q)=>{
          return (
            <div className="card__container" key={q.id}>
                <div className="card__user">
                  <img className="card__user-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
            
            <div className="card__text">
              <h2 className="card__title">
                {q.name} 
              </h2>
            <p className="card__sub-title">
              {q.description}
            </p>

            <div className="card__tags">
              {
                q.Tags.map((tag)=>{
                  return  <button key={tag.id} type="button" className="btn card__tags__btn">{tag.name}</button>
                })
              }
            </div>

            </div>
            
            <div className="card__details">
              <p className="card__difflevel">
                Level : {q.difficulty}
              </p>
              <div className="card__icons">
                <a href="/" className="card__link">&#169;</a>
                <a href="/" className="card__link">&#174;</a>
                <a href="/" className="card__link">&#8452;</a>
              </div>
            </div>
      </div>
          )
    })
    
    return ( 
    <>
            <div className="card">
                  {questionMP}
            </div>
    </> 
    );
}
 
export default Cards;