import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import About from './sections/About'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <PageLoader />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
