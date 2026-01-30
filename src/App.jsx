import './App.css'
import ButtonRow from './components/ButtonRow'
import DownloadCvButton from './components/DownloadCvButton'
import Footer from './components/Footer'
import LinkButton from './components/LinkButton'
import NameBox from './components/NameBox'
import ProfileImage from './components/ProfileImage'
import ShareButton from './components/ShareButton'

function App() {
  return(
    <div className='min-h-screen bg-gradient-to-br dark:from-[#0d1b2a] dark:to-[#1b2b41] from-[#f9fafb] to-[#d7e1ec] py-4 px-[5%]'>
      <ProfileImage />
      <NameBox />
      <ButtonRow />
      <div className="lg:w-3/4 lg:mx-auto">
        <DownloadCvButton /> 
        <LinkButton buttonName={"Linkedin"} buttonLink={"https://www.linkedin.com/in/kieran-pritchard/"} />
        <LinkButton buttonName={"GitHub"} buttonLink={"https://github.com/KieranPritchard"} />
        <LinkButton buttonName={"Try Hack Me"} buttonLink={"https://tryhackme.com/p/NightProxy"} />
        <LinkButton buttonName={"Portfolio"} buttonLink={"https://kieranpritchard.github.io/"} />
        <ShareButton /> 
      </div>
      <Footer />
    </div>
  )
}

export default App