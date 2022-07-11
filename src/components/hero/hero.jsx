import "./hero.css";
import { GiDiamonds } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image"></div>
      <div className="hero-area">
        <h1 className="hero-heading">
          Insurance cannot be <GiDiamonds className="hero-icon" /> complicated
          anymore
        </h1>
        <p>
          Get the best insurance coverage on your smartphone- all in a matter of
          minutes
        </p>
        <div className="buttons">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-tertiary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
