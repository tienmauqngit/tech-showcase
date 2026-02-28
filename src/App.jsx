import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
