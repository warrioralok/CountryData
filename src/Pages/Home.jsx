import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore The World</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaRegArrowAltCircleRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world image"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
