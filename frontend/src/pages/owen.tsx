import Bearidle from '../assets/Bearidle.png'
import Bunnyidle from '../assets/Bunnyidle.png'
import Deersad from '../assets/Deersad.png'


function Owen(){
    return(

    <div className = "OWEN">
        <div className = "Rachel">
                <p className = "indent"> Rachel </p>
                    <p className = "friendpetinfo"> lvl: 9</p>
                    <p className = "friendpetinfo"> attack: 89 </p>
                    <p className = "friendpetinfo"> defense: 87 </p>
                <p className = "friendpetinfo"> health: 95 </p>
                <img src = {Bearidle} alt = "Rachel" className = "manorbear"/>
                </div>
                <div className = "Arden">
                <p className = "indent"> Arden </p>
                    <p className = "friendpetinfo"> lvl: 6</p>
                    <p className = "friendpetinfo"> attack: 65 </p>
                    <p className = "friendpetinfo"> defense: 71 </p>
                    <p className = "friendpetinfo"> health: 65 </p>
                    <img src = {Bunnyidle} alt = "Arden" className = "hiimbunny"/>
                </div>
                <div className = "Lauren">
                <p className = "indent"> Lauren </p>
                    <p className = "friendpetinfo"> lvl: 5</p>
                    <p className = "friendpetinfo"> attack: 51 </p>
                    <p className = "friendpetinfo"> defense: 59 </p>
                    <p className = "friendpetinfo"> health: 62 </p>
                    <img src = {Deersad} alt = "Lauren" className = "deer"/>
                </div>
            </div>

    )
}

export default Owen