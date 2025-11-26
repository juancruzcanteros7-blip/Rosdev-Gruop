import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StructuredData from '../components/StructuredData'
import ScrollToTop from '../components/ScrollToTop'

const About = lazy(() => import('../components/About'))
const Services = lazy(() => import('../components/Services'))
const Projects = lazy(() => import('../components/Projects'))
const Ecosystem = lazy(() => import('../components/Ecosystem'))

const LoadingFallback = () => (
    <div className="flex h-96 w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent"></div>
    </div>
)

export default function Home() {
    return (
        <div className="bg-white">
            <StructuredData />
            <Navbar />
            <main>
                <Hero />
                <Suspense fallback={<LoadingFallback />}>
                    <About />
                    <Services />
                    <Projects />
                    <Ecosystem />
                </Suspense>
                <LogoCloud />
                <CTA />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

