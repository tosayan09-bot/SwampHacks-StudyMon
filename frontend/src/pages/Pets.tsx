import { useState, useEffect } from 'react'
import './Pets.css'
import { api } from '../api'
import type { Pet } from '../api'
import idleBunny from '../assets/idleBunnySprite.png'
import idleDeer from '../assets/idleDeerSprite.png'
import idleBear from '../assets/idleBearSprite.png'

const pets = [
    {name:'Bunny', file:idleBunny},
    {name:'Deer', file:idleDeer},
    {name:'Bear', file:idleBear},
]

function Pets() {
    const[petIndex, setPetIndex] = useState(0)
    const[stats, setStats] = useState<Pet[]>([])
    const[errorMessage, setErrorMessage] = useState('')
    const currentPet = pets[petIndex]
    const [level, setLevel] = useState(1)
    const [xp, setXp] = useState(0)


    useEffect(function () {
        api.get<Pet[]>('/pets')
            .then(function (response) {
                setStats(response.data)
            })
            .catch(function () {
                setErrorMessage("Couldn't reach the server. Try again in a minute.")
            })
    }, [])

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

    let currentStats: Pet | null = null
    for (let i = 0; i < stats.length; i++) {
        if (stats[i].name.toLowerCase() === currentPet.name.toLowerCase()) {
            currentStats = stats[i]
        }
    }

    let health = 'Loading...'
    let attack = 'Loading...'
    let defense = 'Loading...'
    let level = 'Loading...'
    let xp = 'Loading...'
    if (currentStats !== null) {
        health = String(currentStats.health)
        attack = String(currentStats.attack)
        defense = String(currentStats.defense)
        level = String(currentStats.level)
        xp = String(currentStats.xp)
    }

  return (
    <main className="pets-page">
      <h1>Pets!</h1>
      <p>{errorMessage}</p>
      <div className="pets-container">
        <button className = "button button-left"
                            onClick={prev}
        ></button>
        <section className="left">
            <h2>{currentPet.name}</h2>
            <p>Health: {health}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Level: {level}</p>
            <p>Xp: {xp}</p>
        </section>

        <section className="right">
            <img src={currentPet.file} 
                 style={{
                    maxHeight:'500px',
                 }}/>
            <p>Level {level}</p>
            <div className="xp-bar">
            <div className="xp-fill" style={{ width: xp + '%' }}></div>
          </div>
          <button onClick={gainXp}>Gain 25 XP</button>
        </section>

        <button className = "button button-right"
                onClick ={next}
        ></button>
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