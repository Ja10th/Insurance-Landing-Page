import "./article.css";
import { TbArrowUpRight } from "react-icons/tb";

const Article = () => {
  return (
    <section className="article container">
      <div>
        <h4>Our latest news and article</h4>
        <p>
          See below at three main plans for your insurance, for your life and
          for family
        </p>
        <div className="art">
          <h6><a href="#" className="artup">
            Article
          </a></h6>
          <TbArrowUpRight />
        </div>
      </div>
      <div className="articles-img">
        <article>
          <img
            src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>consulting --- july 23,2022</p>
          <h6>Applying all my employee health insurance and happy</h6>
        </article>
      </div>
      <div className="articles-img">
        <article>
          <img
            src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>pro tips --- july 23,2022</p>
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
        </article>
      </div>
    </section>
  );
};

export default Article;
