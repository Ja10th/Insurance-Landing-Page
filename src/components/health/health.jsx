import "./health.css";
import { TbHeartbeat } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { GiHeartPlus } from "react-icons/gi";

const Health = () => {
  return (
    <section className="health">
      <div className="health__first container">
        <h2>Amazing prices complete flexibility</h2>

        <div className="health__main">
          <div className="heart">
            <TbHeartbeat className="heart-icon" />
            <h5>Life & Health </h5>
          </div>
          <AiFillCar className="heart-icon2" />
          <IoDiamondOutline className="heart-icon2" />
        </div>

        <h3>Health Insurance</h3>
        <p>
          Fast track design thinking yet quarterly sales are at an all-time low
          i have a hard stop in
        </p>
      </div>
      <div className="health__second">
        <div className="s-ico">
          <IoCheckmarkCircleSharp className="s-icon" />
          <small>Insurance ready</small>
        </div>
        <div className="heart-plus">
          <GiHeartPlus className="heart-icon2" />
          <small>
            Covering your health matters including 1st class hospitalization
          </small>
        </div>
        <div className="heart-image">
          <img
            src={
              "https://images.pexels.com/photos/7089329/pexels-photo-7089329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="heart-image"
            alt="heart-images"
          />
        </div>
      </div>
    </section>
  );
};

export default Health;
