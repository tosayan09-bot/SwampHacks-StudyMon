import { useState } from 'react'
import './Pets.css'
import bunnyHappy from '../assets/idleBunnySprite.png'
import deerHappy from '../assets/idleDeerSprite.png'
import bearHappy from '../assets/idleBearSprite.png'

const pets = [
    {name:'Bunny', file:bunnyHappy, health:10, attack: 10, defense: 10, level: 10, xp:10},
    {name:'Deer', file:deerHappy, health:10},
    {name:'Bear', file:bearHappy, damage:10},
]

function Pets() {
    const[petIndex, setPetIndex] = useState(0)
    const currentPet = pets[petIndex]

    function next() {
        setPetIndex(function (i) {
            if(i >= pets.length - 1){
                return 0
            }
            else{
                return i + 1
            }
        })
    }
    function prev() {
        setPetIndex(function (i) {
            if(i <= 0){
                return pets.length -1
            }
            else{
                return i - 1
            }
        })
    }
  return (
    <main className="pets-page">
      <h1>Pets!</h1>
      <div className="pets-container">
        <button className = "button button-left"
                            onClick={prev}
        ></button>
        <section className="left">
            <h2>{currentPet.name}</h2>
            <p>Health: health</p>
            <p>Attack: damage</p>
            <p>Defense: damage</p>
            <p>Level: damage</p>
            <p>Xp: damage</p>
        </section>

        <section className="right">
            <img src={currentPet.file} 
                 style={{
                    maxHeight:'500px',
                 }
                 }
            />
        </section>

        <button className = "button button-right"
                onClick ={next}
        ></button>
      </div>
    </main>
  )
}

export default Pets
