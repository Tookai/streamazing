import React from "react";
import "../Style/MovieCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LOTR1 from "../img/Movie-Cover/LOTR1.jpg";
import LOTR2 from "../img/Movie-Cover/LOTR2.jpg";
import LOTR3 from "../img/Movie-Cover/LOTR3.jpg";
import FightClub from "../img/Movie-Cover/FightClub.jpg";
import Deadpool from "../img/Movie-Cover/Deadpool.jpg";
import Avatar from "../img/Movie-Cover/Avatar.jpg";
import Gatsby from "../img/Movie-Cover/Gatsby.jpg";
import VforVendetta from "../img/Movie-Cover/VforVendetta.jpg";
import Gladiator from "../img/Movie-Cover/Gladiator.jpg";
import GuardiansOfTheGalaxy from "../img/Movie-Cover/GuardiansOfTheGalaxy.jpg";

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
    items: 5,
  },
};

function Random() {
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        dotListClass=""
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
          <img src={LOTR1} className="movie__img" />
          <p className="movie__txt">LOTR 1</p>
        </div>
        <div className="movie__card">
          <img src={LOTR2} className="movie__img" />
          <p className="movie__txt">LOTR 2</p>
        </div>
        <div className="movie__card">
          <img src={LOTR3} className="movie__img" />
          <p className="movie__txt">LOTR 3</p>
        </div>
        <div className="movie__card">
          <img src={FightClub} className="movie__img" />
          <p className="movie__txt">Fight Club</p>
        </div>
        <div className="movie__card">
          <img src={Deadpool} className="movie__img" />
          <p className="movie__txt">Deadpool</p>
        </div>
        <div className="movie__card">
          <img src={Avatar} className="movie__img" />
          <p className="movie__txt">Avatar</p>
        </div>
        <div className="movie__card">
          <img src={Gatsby} className="movie__img" />
          <p className="movie__txt">The Great Gatsby</p>
        </div>
        <div className="movie__card">
          <img src={VforVendetta} className="movie__img" />
          <p className="movie__txt">V for Vendetta</p>
        </div>
        <div className="movie__card">
          <img src={Gladiator} className="movie__img" />
          <p className="movie__txt">Gladiator</p>
        </div>
        <div className="movie__card">
          <img src={GuardiansOfTheGalaxy} className="movie__img" />
          <p className="movie__txt">Guardians of the Galaxy</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Random;
