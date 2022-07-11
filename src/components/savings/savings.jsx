import "./savings.css";
import Insure from "../../assets/insure.png";
import { HiOutlineChartBar } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoHandRightOutline } from "react-icons/io5";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Savings = () => {
  return (
    <section className="container savings">
      <img src={Insure} alt="savings" className="savings-image" />
      <div className="savings-two">
        <div>
          <div className="s-title">
            <HiOutlineChartBar className="s-icon1" />
            <h5>Upgrade or change your current plan everytime you want</h5>
            <AiOutlineArrowDown className="s-icon2" />
          </div>
          <p>
            Fast tracks design thinking yet quarterly sales are at an all time
            low I have a hard stop in an hour and half{" "}
          </p>
          <a href="#" className="learn">
            Learn More <AiOutlineArrowRight />
          </a>
          <div className="roow">
            <IoMailOpenOutline className="roow-icon1" />
            <h5>Be the #1 in getting our latest news</h5>
            <BsFillArrowUpRightSquareFill className="roow-icon2" />
          </div>
          <div className="rowp"></div>
          <div className="roow">
            <IoHandRightOutline className="roow-icon1" />
            <h5>Register everywhere and anytime you want</h5>
            <BsFillArrowUpRightSquareFill className="roow-icon2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
