import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Ecosystem from '../components/Ecosystem'
import LogoCloud from '../components/LogoCloud'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Ecosystem />
                <LogoCloud />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}
