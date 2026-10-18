import { useNavigate } from 'react-router-dom'
import '../Home.css'
import '../index.css'
function Home(){
  const navigate = useNavigate()
  function goToPets(){
    navigate('/Pets')
  }
    return(
      <>
      <section id="center">
        <div>
          <h1>Meet Studymon</h1>
          <p>Academic habit tracker and study buddy fighter</p>
          <button 
            className = "startButton"
            onClick={goToPets}>
            <p>See pets</p>
          </button>
        </div>
      </section>

        <section id="explanation">
        <div id="stepOne">
          <h2>Step 1</h2>
          <p>Raise one of five unique pets through tracking class attendance, extracurricular involvement, and planned study time</p>
        </div>
        <div id="stepTwo">
          <h2>Step 2</h2>
          <p>Fight your friends' study pets in exciting battles to reap rewards</p>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      </>
    );
}
export default Home;