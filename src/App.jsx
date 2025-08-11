import './App.css'
import ButtonRow from './components/ButtonRow'
import Footer from './components/Footer'
import LinkButton from './components/LinkButton'
import NameBox from './components/NameBox'
import ProfileImage from './components/ProfileImage'

function App() {
  return(
    <div className='h-auto bg-linear-to-br from-[#0d1b2a] to-[#1b2b41] py-4'>
      <ProfileImage />
      <NameBox />
      <ButtonRow />
      <div className='mx-32'>
        <LinkButton buttonName={"Linkedin"} buttonLink={"www.linkedin.com/in/kieran-pritchard"} />
        <LinkButton buttonName={"GitHub"} buttonLink={"https://github.com/KieranPritchard"} />
        <LinkButton buttonName={"Try Hack Me"} buttonLink={"https://tryhackme.com/p/NightProxy"} />
        <LinkButton buttonName={"Portfolio"} buttonLink={"https://kieranpritchard.github.io/Kieran-Pritchard-Portfolio/"} />
      </div>
      <Footer />
    </div>
  )
}

export default App
