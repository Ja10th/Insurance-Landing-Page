import "./testimony.css";
import Comp from "../../assets/company4-removebg-preview.png";
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {BsArrowLeftSquare} from "react-icons/bs"

const Testimony = () => {
  return (
    <section className="testimonies">
      <div className="testimony container">
        <article className="testimony-image1">
          <img
            src="https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg"
            alt=""
          />
        </article>
        <article>
          <p>---- Testimonial</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            atque nostrum autem fugit magnam itaque et! Molestiae expedita unde
            iusto. Quae, deserunt perferendis? Quos corporis recusandae
            reiciendis officia, nam quo reprehenderit, ipsam exercitationem
            voluptates dolor voluptate aperiam laboriosam adipisci sint, animi
            nostrum.
          </p>
          <div className="testi">
            <h6>Alexis Connely</h6> <small>COO at company</small>
          </div>
          <div className="Icon-comp">
            <img src={Comp} alt="images" />
            <div >
                <BsArrowLeftSquare className="companyIcon1"/>
                <BsFillArrowRightSquareFill className="companyIcon1"/>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimony;
