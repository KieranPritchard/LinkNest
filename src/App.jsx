import './App.css'
// Imports for components
import ContentBackground from './components/backgrounds/ContentBackground'
import Biography from './components/Bio/Biography'
import PersonalBio from './components/Bio/PersonalBio'
import DownloadButton from './components/Buttons/DownloadButton'
import LongButton from './components/Buttons/LongButton'
import SmallButton from './components/Buttons/SmallButton'
import ImageDropDownButton from './components/Buttons/ImageDropDownButton'

// Imports for files
import CV from '../src/assets/Kieran_Pritchard_C.V.pdf'
import ShareQRCode from '../src/assets/qr_code.webp'

function App() {
  return (
    <>
      {/* Displays the background colour of the app */}
      <div className='min-h-screen dark:bg-[#0d1b2a] bg-[#f9fafb] py-4 px-4'>
        
        {/* Wraps the other components in a background component */}
        <ContentBackground>
          
          {/* Container to maintain alignment across the whole app */}
          <div className='max-w-screen-xl mx-auto'>
            
            {/* Returns the personal bio and biography */}
            <PersonalBio />
            <Biography />

            <div className='flex justify-center pt-5 gap-4 lg:gap-10'>
              {/* Left Spacer - Aligns with the image/spacer in components above */}
              {/* Added 'hidden lg:block' to prevent the spacer from squashing content on tablets */}
              <div className="w-64 flex-shrink-0 hidden lg:block"></div> 

              {/* Content Section */}
              <div className='flex-1 w-full'>
                {/* Grid for Small Buttons - Adjusted gaps for mobile responsiveness */}
                <div className='grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-2'>
                  <SmallButton icon={"Linkedin"} link={"https://www.linkedin.com/in/kieran-pritchard/"}/>
                  <SmallButton icon={"Github"} link={"https://github.com/KieranPritchard"}/>
                  <SmallButton icon={"Try Hack Me"} link={"https://tryhackme.com/p/OverFl0x"}/>
                  <SmallButton icon={"Hack The Box"} link={"https://app.hackthebox.com/users/2380996"}/>
                  <SmallButton icon={"Portfolio"} link={"https://kieranpritchard.github.io"}/>
                  <SmallButton icon={"Email"} link={"mailto:KieranPritchard06@gmail.com"}/>
                </div>
                
                {/* This will now align perfectly with the edges of the buttons above */}
                <div className='flex flex-col gap-y-2'>
                    <LongButton text="CTF (Capture The Flag Write Ups)" link="https://kieranpritchard.github.io/CTF-Showcase/#/" icon="globe" />
                    <DownloadButton fileName={"KieranPritchard-C.V.pdf"} file={CV} text={"Download My C.V"}/>
                    <ImageDropDownButton text={"Share with others"} image={ShareQRCode} altText={"QR code to share with other people"}/>
                </div>
              </div>

              {/* Right Spacer - Matches the right-side alignment of the bio */}
              <div className="w-64 flex-shrink-0 hidden lg:block"></div> 
            </div>
          </div>

        </ContentBackground>
      </div>
    </>
  )
}

export default App