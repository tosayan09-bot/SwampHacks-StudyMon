import { Link } from 'react-router-dom'

function Battle(){
    return(
    <> 
    <section id="intro">
    <h1> Battle!</h1>
    <p> Battle your friends and see who has the best pet! </p>
    <p> Your Friends </p>
    </section>

        
    <section id="friendslist">
        
        
        <div className = "Ethan">

        <Link to="/friends/ethan">Ethan</Link>
        
            </div>
     <div className = "Owen">
        
        <Link to="/friends/owen">Owen</Link>
        
                 </div>

        <div className = "Samarth">
        <Link to="/friends/samarth">Samarth</Link>
        
            </div>
        </section>

        </>

    );

}

export default Battle;
