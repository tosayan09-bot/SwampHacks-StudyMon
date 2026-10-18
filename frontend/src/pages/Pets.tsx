import { useEffect, useState } from 'react'
import './Pets.css'
import { api, type Pet } from '../api'
import bunnyHappy from '../assets/idleBunnySprite.png'
import deerHappy from '../assets/idleDeerSprite.png'
import bearHappy from '../assets/idleBearSprite.png'

const sprites: Record<string, string> = {
  Bunny: bunnyHappy,
  Deer: deerHappy,
  Bear: bearHappy,
}

function Pets() {
  const [pets, setPets] = useState<Pet[]>([])
  const [petIndex, setPetIndex] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get<Pet[]>('/pets')
      .then(res => setPets(res.data))
      .catch(() => setError("Couldn't reach the server. Try again in a minute."))
  }, [])

  if (error) return <p>{error}</p>
  if (pets.length === 0) return <p>Loading... (the server may be waking up)</p>

  const currentPet = pets[petIndex]
  const next = () => setPetIndex(i => (i + 1) % pets.length)
  const prev = () => setPetIndex(i => (i - 1 + pets.length) % pets.length)

  return (
    <main className="pets-page">
      <h1>Pets!</h1>
      <div className="pets-container">
        <button className="button button-left" onClick={prev}></button>
        <section className="left">
          <h2>{currentPet.name}</h2>
          <p>Health: {currentPet.health}</p>
          <p>Attack: {currentPet.attack}</p>
          <p>Defense: {currentPet.defense}</p>
          <p>Level: {currentPet.level}</p>
          <p>Xp: {currentPet.xp}</p>
        </section>
        <section className="right">
          <img src={sprites[currentPet.name]} style={{ maxHeight: '500px' }} />
        </section>
        <button className="button button-right" onClick={next}></button>
      </div>
    </main>
  )
}

export default Pets
{/*import { useState } from 'react'
import './Pets.css'
import bunnyHappy from '../assets/idleBunnySprite.png'
import deerHappy from '../assets/idleDeerSprite.png'
import bearHappy from '../assets/idleBearSprite.png'

const sprites: Record<string,string> = {
    Bunny: bunnyHappy,
    Deer: deerHappy,
    Bear: bearHappy,
}
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
*/}