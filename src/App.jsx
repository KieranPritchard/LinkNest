import './App.css'
import ButtonRow from './components/ButtonRow'
import Footer from './components/Footer'
import LinkButton from './components/LinkButton'
import NameBox from './components/NameBox'
import ProfileImage from './components/ProfileImage'
import ShareButton from './components/ShareButton'
import '@fontsource/red-hat-display/900.css'   // Red Hat Display, weight 900
import '@fontsource/source-code-pro/400.css'  // Source Code Pro, weight 400

function App() {
  return (
    <div className="h-screen min-h-[100dvh] w-full bg-gradient-to-br dark:from-[#0d1b2a] dark:to-[#1b2b41] from-[#f9fafb] to-[#d7e1ec] pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+2.5rem)] px-[5%]">
      <div className="lg:max-w-3xl lg:mx-auto justify-center">
        <ProfileImage />
        <NameBox />
        <ButtonRow />
        <div className="space-y-2">
          <LinkButton buttonName="Linkedin" buttonLink="https://www.linkedin.com/in/kieran-pritchard/" />
          <LinkButton buttonName="GitHub" buttonLink="https://github.com/KieranPritchard" />
          <LinkButton buttonName="Try Hack Me" buttonLink="https://tryhackme.com/p/NightProxy" />
          <LinkButton buttonName="Portfolio" buttonLink="https://kieranpritchard.github.io/Kieran-Pritchard-Portfolio/" />
          <ShareButton />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App