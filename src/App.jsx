import './App.css'
import ContentBackground from './components/backgrounds/ContentBackground'
import Biography from './components/Bio/Biography'
import PersonalBio from './components/Bio/PersonalBio'

function App() {
  return(
    <>
      <div className='min-h-screen bg-gradient-to-br dark:bg-[#0d1b2a] bg-[#f9fafb] py-4'>
        <ContentBackground>
          <PersonalBio />
          <Biography />
        </ContentBackground>
      </div>
    </>
  )
}

export default App