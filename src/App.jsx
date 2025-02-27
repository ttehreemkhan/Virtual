// import " React "
import FeatureSection from "./Components/FeatureSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Testimonial from "./Components/Testimonial"
import WorkFlow from "./Components/WorkFlow"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <WorkFlow/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
