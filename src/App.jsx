import './App.css'
import ContentBackground from './components/backgrounds/ContentBackground'
import Biography from './components/Bio/Biography'
import PersonalBio from './components/Bio/PersonalBio'
import SmallButton from './components/Buttons/SmallButton'

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
          <div className='flex justify-center pt-5'>
            {/* Left Spacer: Matches the w-64 image/spacer in other components */}
            <div className="w-64 flex-shrink-0"></div> 

            {/* The Grid: This now occupies the "Content Column" space */}
            <div className='grid grid-cols-6 w-full justify-items-center'>
              <SmallButton icon={"Linkedin"} link={"https://www.linkedin.com/in/kieran-pritchard/"}/>
              <SmallButton icon={"Github"} link={"https://github.com/KieranPritchard"}/>
              <SmallButton icon={"Try Hack Me"} link={"https://tryhackme.com/p/OverFl0x"}/>
              <SmallButton icon={"Hack The Box"} link={"https://app.hackthebox.com/users/2380996"}/>
              <SmallButton icon={"Portfolio"} link={"https://kieranpritchard.github.io"}/>
              <SmallButton icon={"Email"} link={"mailto:KieranPritchard06@gmail.com"}/>
            </div>

            {/* Right Spacer: Matches the right spacer in Biography */}
            <div className="w-64 flex-shrink-0"></div> 
          </div>
        </ContentBackground>
      </div>
    </>
  )
}

export default App