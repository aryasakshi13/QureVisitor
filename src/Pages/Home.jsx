import Hero from "../Sections/Hero";
import VisionMission from "../Sections/visionMission";
import Deployment from "../Sections/Deployement";
import WhocanUse from "../Sections/WhocanUse";
import TraditionalIssues from "../Sections/TraditionalIssues";
import PremiumSupport from "../Sections/PremiumSupport";
import HowItWorks from "../Sections/HowItsWorks";
import PricingPlans from "../Sections/PricingPlans";
import FAQ from "../Sections/FAQ";
import CTA from "../Sections/CTA";
import Footer from "../Components/Layout/Footer";


const Home = () => {
  return (
    <>
      <Hero/>
      <VisionMission/>
      <TraditionalIssues/>
       < PremiumSupport/>
       <HowItWorks/>
      <WhocanUse/>
      <Deployment/>
      <PricingPlans/>
      <FAQ/>
      <CTA/>
      <Footer/>
 
    </>
  );
};

export default Home;