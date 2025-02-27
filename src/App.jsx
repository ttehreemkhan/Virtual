// import " React "
import FeatureSection from "./Components/FeatureSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Testimonial from "./Components/Testimonial"
import WorkFlow from "./Components/WorkFlow"
import FooterComponent from "./Components/FooterComponent"

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
    <FooterComponent/>
    </div>
    </>
  )
}

export default App
