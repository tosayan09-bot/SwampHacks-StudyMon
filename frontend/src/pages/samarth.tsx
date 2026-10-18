import Deerhappy from '../assets/Deerhappy.png'
import Bearidle from '../assets/Bearidle.png'
import Bunnyidle from '../assets/Bunnyidle.png'

function Samarth() {
    return(
    <div className = "Samarth">
        <div className = "Srija">
        <p className = "indent"> Srija </p>
        
            <p className = "friendpetinfo"> lvl: 7</p>
            <p className = "friendpetinfo"> attack: 54 </p>
            <p className = "friendpetinfo"> defense: 45 </p>
            <p className = "friendpetinfo"> health: 67 </p>
            <img src = {Bunnyidle} alt = "Srija" className = "hiimbunny"/>

            </div>

            <div className = "Alicia">
                <p className = "indent"> Alicia </p>
                    <p className = "friendpetinfo"> lvl: 10</p>
                    <p className = "friendpetinfo"> attack: 97 </p>
                    <p className = "friendpetinfo"> defense: 95 </p>
                    <p className = "friendpetinfo"> health: 100 </p>
                    <img src = {Deerhappy} alt = "Alicia" className = "deer"/>
            </div>
            <div className = "Jaedon">
            <p className = "indent"> Jaedon </p>
                <p className = "friendpetinfo"> lvl: 4</p>
                <p className = "friendpetinfo"> attack: 49 </p>
                <p className = "friendpetinfo"> defense: 43 </p>
                <p className = "friendpetinfo"> health: 50 </p>
                <img src = {Bearidle} alt = "Jaedon" className = "manorbear"/>
            </div>
            </div>



    )

}

export default Samarth