import Hero from "../Sections/Hero";
import VisionMission from "../Sections/visionMission";
import Deployment from "../Sections/Deployement";
import WhocanUse from "../Sections/WhocanUse";
import TraditionalIssues from "../Sections/TraditionalIssues";
import PremiumSupport from "../Sections/PremiumSupport";
import HowItWorks from "../Sections/HowItsWorks";
import PricingPlans from "../Sections/PricingPlans";
import FAQ from "../Sections/FAQ";


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
 
    </>
  );
};

export default Home;