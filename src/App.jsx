import './App.css'
import ButtonRow from './components/ButtonRow'
import LinkButton from './components/LinkButton'
import NameBox from './components/NameBox'
import ProfileImage from './components/ProfileImage'

function App() {
  return(
    <div className='h-screen bg-linear-to-br from-[#0d1b2a] to-[#1b2b41]'>
      <ProfileImage />
      <NameBox />
      <ButtonRow />
      <div className='mx-32'>
        <LinkButton buttonName={"Linkedin"} buttonLink={"www.linkedin.com/in/kieran-pritchard"} />
      </div>
    </div>
  )
}

export default App
