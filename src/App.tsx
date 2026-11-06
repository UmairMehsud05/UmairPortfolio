import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Experience } from './components/Experience'
import { FeaturedWork } from './components/FeaturedWork'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SkillsSection } from './components/SkillsSection'
import { ThemeProvider } from './theme/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <BackToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <FeaturedWork />
        <SkillsSection />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
