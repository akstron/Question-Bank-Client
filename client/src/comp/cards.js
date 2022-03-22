const Cards = () => {
    return ( 
    <>
    <div class="card">
          <div class="card__container">
                <div class="card__user">
                  <img class="card__user-img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                
                <div class="card__text">
                  <h2 class="card__title">
                    10 Kids unaware of their Halloween constume 
                  </h2>
                 <p class="card__sub-title">
                   It's one thing to subject yourself to a Halloween costume mishap, because, hey, that's perogative. Loren Ipsum Lorem Ipsum Loren Ipsum. Lorem Ipsum Lorem Ipsum Lorem 
                 </p>

                 <div class="card__tags">
                  <button type="button" class="btn card__tags__btn">Data Structures</button>
                  <button type="button" class="btn card__tags__btn">Architecture </button>
                  <button type="button" class="btn card__tags__btn">Dynamic Programming </button>
                  <button type="button" class="btn card__tags__btn">Allied courses </button>
                </div>

                </div>
                
                <div class="card__details">
                  <p class="card__difflevel">
                    difficult
                  </p>
                  <div class="card__icons">
                    <a href="/" class="card__link">&#169;</a>
                    <a href="/" class="card__link">&#174;</a>
                    <a href="/" class="card__link">&#8452;</a>
                  </div>
                </div>
        </div>  
    </div>
    </> 
    );
}
 
export default Cards;