import Hero from "../Sections/Hero";
import HowItWorks from "../Sections/PremimumSupport";
import VisionMission from "../Sections/visionMission";
import Deployment from "../Sections/Deployement";
import WhocanUse from "../Sections/WhocanUse";
import TraditionalIssues from "../Sections/TraditionalIssues";

const Home = () => {
  return (
    <>
      <Hero/>
      <VisionMission/>
      <TraditionalIssues/>
      <HowItWorks/>
      <WhocanUse/>
      <Deployment/>
 
    </>
  );
};

export default Home;