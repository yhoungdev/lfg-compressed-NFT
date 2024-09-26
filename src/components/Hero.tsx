import Assets from "./Assets";
import Intro from "./Intro";
import ParticlesComp from "./Particles";
import { useVisibleStore } from "../store/useVisible";
import Utility from "./Utility";

const Hero = () => {
  const components = {
    "#intro": <Intro />,
    "#assets": <Assets />,
    "#utility": <Utility />,
  };

  const { visibleComponent } = useVisibleStore();

  return (
    <div className="relative overflow-x-hidden h-screen flex flex-col justify-between">
      <ParticlesComp />
      <div className=""></div>
      <Intro />
      {/* <Controls /> */}
    </div>
  );
};

export default Hero;
