import Deerhappy from '../assets/Deerhappy.png'
import Bearhappy from '../assets/Bearhappy.png'
import Bearidle from '../assets/Bearhappy.png'
import Bunnyidle from '../assets/Bunnyidle.png'
import Deersad from '../assets/Deersad.png'
import Bunnysad from '../assets/Bunnysad.png'


function Battle(){
    return(
        <> 
        <section id="intro">
            <h1> Battle!</h1>
            <p> Battle your friends and see who has the best pet! </p>
        </section>
        <section id="friendslist">
            <p> Your Friends </p>
            <p className = "indent"> Kyan </p>
                <img src = {Deerhappy} alt = "Kyan" className = "Kyan"/>
                    <p className = "friendpetinfo"> lvl: 7</p>
                    <p className = "friendpetinfo"> attack: 68 </p>
                    <p className = "friendpetinfo"> defense: 75 </p>
                    <p className = "friendpetinfo"> health: 73 </p>

            <p className = "indent"> Julian </p>
                <img src = {Bearidle} alt = "Julian" className = "julian"/>
                    <p className = "friendpetinfo"> lvl: 4</p>
                    <p className = "friendpetinfo"> attack: 43 </p>
                    <p className = "friendpetinfo"> defense: 57 </p>
                    <p className = "friendpetinfo"> health: 64 </p>

            <p className = "friend"> Ethan </p>
                <p className = "indent"> Krish </p>
                <img src = {Bunnysad} alt = "Krish" className = "krish"/>
                    <p className = "friendpetinfo"> lvl: 1</p>
                    <p className = "friendpetinfo"> attack: 5 </p>
                    <p className = "friendpetinfo"> defense: 5 </p>
                    <p className = "friendpetinfo"> health: 5 </p>

                
                
            <p className = "friend"> Owen </p>
                <p className = "indent"> Rachel </p>
                    <p className = "friendpetinfo"> lvl: 9</p>
                    <p className = "friendpetinfo"> attack: 89 </p>
                    <p className = "friendpetinfo"> defense: 87 </p>
                    <p className = "friendpetinfo"> health: 95 </p>
                    <img src = {Bearhappy} alt = "Rachel" className = "Rachel"/>
                <p className = "indent"> Arden </p>
                    <p className = "friendpetinfo"> lvl: 6</p>
                    <p className = "friendpetinfo"> attack: 65 </p>
                    <p className = "friendpetinfo"> defense: 71 </p>
                    <p className = "friendpetinfo"> health: 65 </p>
                    <img src = {Bunnyidle} alt = "Arden" className = "Arden"/>
                <p className = "indent"> Lauren </p>
                    <p className = "friendpetinfo"> lvl: 5</p>
                    <p className = "friendpetinfo"> attack: 51 </p>
                    <p className = "friendpetinfo"> defense: 59 </p>
                    <p className = "friendpetinfo"> health: 62 </p>
                    <img src = {Deersad} alt = "Lauren" className = "Lauren"/>
            <p className = "friend"> Samarth </p>
                <p className = "indent"> Srija </p>
                    <p className = "friendpetinfo"> lvl: 7</p>
                    <p className = "friendpetinfo"> attack: 54 </p>
                    <p className = "friendpetinfo"> defense: 45 </p>
                    <p className = "friendpetinfo"> health: 67 </p>
                    <img src = {Bunnyidle} alt = "Srija" className = "Srija"/>
                <p className = "indent"> Alicia </p>
                    <p className = "friendpetinfo"> lvl: 10</p>
                    <p className = "friendpetinfo"> attack: 97 </p>
                    <p className = "friendpetinfo"> defense: 95 </p>
                    <p className = "friendpetinfo"> health: 100 </p>
                    <img src = {Bearhappy} alt = "Alicia" className = "Alicia"/>
                <p className = "indent"> Jaedon </p>
                    <p className = "friendpetinfo"> lvl: 4</p>
                    <p className = "friendpetinfo"> attack: 49 </p>
                    <p className = "friendpetinfo"> defense: 43 </p>
                    <p className = "friendpetinfo"> health: 50 </p>
                    <img src = {Bearidle} alt = "Jaedon" className = "Jaedon"/>
        </section>

        </>

    );

}
export default Battle;
