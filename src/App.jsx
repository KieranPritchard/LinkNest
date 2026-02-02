import './App.css'
// Imports for components
import ContentBackground from './components/backgrounds/ContentBackground'
import Biography from './components/Bio/Biography'
import PersonalBio from './components/Bio/PersonalBio'
import DownloadButton from './components/Buttons/DownloadButton'
import LongButton from './components/Buttons/LongButton'
import SmallButton from './components/Buttons/SmallButton'
// Imports for files
import CV from '../src/assets/Kieran_Pritchard_C.V.pdf'

function App() {
  return(
    <>
      {/* Displays the background colour of the app */}
      <div className='min-h-screen dark:bg-[#0d1b2a] bg-[#f9fafb] py-4'>
        {/* Wrapps the other components in a background component */}
        <ContentBackground>
          {/* Returns the personal vio and biography */}
          <PersonalBio />
          <Biography />
          <div className='flex justify-center pt-5 gap-8'>
            {/* Left Spacer */}
            <div className="w-64 flex-shrink-0"></div> 

            {/* Content Section */}
            <div className='flex-1 grid grid-cols-6 gap-x-12 gap-y-2'>
              <SmallButton icon={"Linkedin"} link={"https://www.linkedin.com/in/kieran-pritchard/"}/>
              <SmallButton icon={"Github"} link={"https://github.com/KieranPritchard"}/>
              <SmallButton icon={"Try Hack Me"} link={"https://tryhackme.com/p/OverFl0x"}/>
              <SmallButton icon={"Hack The Box"} link={"https://app.hackthebox.com/users/2380996"}/>
              <SmallButton icon={"Portfolio"} link={"https://kieranpritchard.github.io"}/>
              <SmallButton icon={"Email"} link={"mailto:KieranPritchard06@gmail.com"}/>
              
              {/* This will now align perfectly with the edges of the buttons above */}
              <div className='col-span-6'>
                  <LongButton text="CTF (Capture The Flag Write Ups)" link="https://kieranpritchard.github.io/CTF-Showcase/#/" icon="globe" />
                  <DownloadButton fileName={"KieranPritchard-C.V.pdf"} file={CV} text={"Download My C.V"}/>
              </div>
            </div>

            {/* Right Spacer */}
            <div className="w-64 flex-shrink-0"></div> 
          </div>
        </ContentBackground>
      </div>
    </>
  )
}

export default App