
import { Link } from 'react-router-dom'
import Deerhappy from '../assets/Deerhappy.png'
import Bearidle from '../assets/Bearidle.png'
import Bunnyidle from '../assets/Bunnyidle.png'
import Deersad from '../assets/Deersad.png'
import Bunnysad from '../assets/Bunnysad.png'

function Ethan(){
    return(

    <div className = "Ethanspets">
    <div className = "krish">
            <p className = "indent"> Krish </p>
            
            <p className = "friendpetinfo"> lvl: 1</p>
            <p className = "friendpetinfo"> attack: 5 </p>
            <p className = "friendpetinfo"> defense: 5 </p>
            <p className = "friendpetinfo"> health: 5 </p>
                <img src = {Bunnysad} alt = "Krish" className = "hiimbunny"/>
            </div>

            <div className = "kyan">
            <p className = "indent"> Kyan </p>
            
            <p className = "friendpetinfo"> lvl: 7</p>
            <p className = "friendpetinfo"> attack: 68 </p>
            <p className = "friendpetinfo"> defense: 75 </p>
            <p className = "friendpetinfo"> health: 73 </p>
                <img src = {Deerhappy} alt = "Kyan" className = "deer"/>
            
            </div>
                
                
            <div className = "julian">
            <p className = "indent"> Julian </p>
            
            <p className = "friendpetinfo"> lvl: 4</p>
            <p className = "friendpetinfo"> attack: 43 </p>
            <p className = "friendpetinfo"> defense: 57 </p>
            <p className = "friendpetinfo"> health: 64 </p>
            <img src = {Bearidle} alt = "Julian" className = "manorbear"/>
            </div>
            </div>
    )
}

export default Ethan
