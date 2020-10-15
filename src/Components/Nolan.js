import React from "react";
import "../Style/MovieCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Inception from "../img/Movie-Cover/Inception.jpg";
import BatmanBegins from "../img/Movie-Cover/BatmanBegins.jpg";
import DarkKnight from "../img/Movie-Cover/DarkKnight.jpg";
import DarkKnightRises from "../img/Movie-Cover/DarkKnightRises.jpg";
import Interstellar from "../img/Movie-Cover/Interstellar.png";
import Dunkirk from "../img/Movie-Cover/Dunkirk.jpg";
import Memento from "../img/Movie-Cover/Memento.jpg";
import ThePrestige from "../img/Movie-Cover/ThePrestige.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

function Nolan() {
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        arrows
        centerMode={false}
        containerClass="container"
        draggable={false}
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
        showDots
        slidesToSlide={3}
        swipeable={false}
      >
        <div className="movie__card">
          <img src={Inception} className="movie__img" />
          <p className="movie__txt">Inception</p>
        </div>
        <div className="movie__card">
          <img src={BatmanBegins} className="movie__img" />
          <p className="movie__txt">Batman Begins</p>
        </div>
        <div className="movie__card">
          <img src={DarkKnight} className="movie__img" />
          <p className="movie__txt">The Dark Knight</p>
        </div>
        <div className="movie__card">
          <img src={DarkKnightRises} className="movie__img" />
          <p className="movie__txt">The Dark Knight Rises</p>
        </div>
        <div className="movie__card">
          <img src={Interstellar} className="movie__img" />
          <p className="movie__txt">Interstellar</p>
        </div>
        <div className="movie__card">
          <img src={Dunkirk} className="movie__img" />
          <p className="movie__txt">Dunkirk</p>
        </div>
        <div className="movie__card">
          <img src={Memento} className="movie__img" />
          <p className="movie__txt">Memento</p>
        </div>
        <div className="movie__card">
          <img src={ThePrestige} className="movie__img" />
          <p className="movie__txt">The Prestige</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Nolan;
