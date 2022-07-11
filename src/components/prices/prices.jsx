import "./prices.css";
import { GiDiamonds} from "react-icons/gi";

const Prices = () => {
  return (
    <section>
      <div className="prices__details container">
        <article className="prices__detail">
          <h4>Lite Plan</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis esse quo porro.
          </p>
          <h1>
            $29<span>/mo</span>
          </h1>
          <button className="btn btn-secondary">Select plan</button>
          
        </article>
        <article className="prices__detail pri-active">
          <h4> Basic Plan</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis esse quo porro.
          </p>
          <h1>
            $49<span>/mo</span>
          </h1>
          <button className="btn btn-secondary pri-active-btn">
            Select plan
          </button>
        </article>
        <article className="prices__detail">
          <h4>Plus Plan</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis esse quo porro.
          </p>
          <h1>
            $69<span>/mo</span>
          </h1>
          <button className="btn btn-secondary">Select plan</button>
        </article>
      </div>
      <div className="price__list">
        <div className="container listt">
          <article className="prices__diamond">
            <div>
              <GiDiamonds className="d-icon" />
              <p>12 months of care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>7-part health care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>Health plans update</p>
            </div>
          </article>
          <article className="prices__diamond diamond">
            <div>
              <GiDiamonds className="d-icon" />
              <p>12 months of care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>7-part health care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>Health plans update</p>
            </div>
          </article>
          <article className="prices__diamond">
            <div>
              <GiDiamonds className="d-icon" />
              <p>12 months of care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>7-part health care</p>
            </div>
            <div>
              <GiDiamonds className="d-icon" />
              <p>Health plans update</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Prices;
