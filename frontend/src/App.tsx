import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="petLogo">
          add main logo here
        </div>
        <div>
          <h1>Meet Studymon</h1>
          <p>
            Academic habit tracker and study buddy fighter
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="explanation">
        <div id="stepOne">
          <h2>Step 1</h2>
          <p>Raise one of 5 unique pets through tracking class attendance, extracurricular involvement, and planned study time</p>
        </div>
        <div id="stepTwo">
          <h2>Step 2</h2>
          <p>Fight your friends' study pets in exciting battles to reap rewards</p>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
