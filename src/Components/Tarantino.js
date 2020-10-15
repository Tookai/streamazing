import React from "react";
import "../Style/MovieCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PulpFiction from "../img/Movie-Cover/PulpFiction.jpg";
import SinCity from "../img/Movie-Cover/SinCity.jpg";
import IngloriousBasterds from "../img/Movie-Cover/IngloriousBasterds.jpg";
import KillBill1 from "../img/Movie-Cover/KillBill1.jpg";
import KillBill2 from "../img/Movie-Cover/KillBill2.jpg";
import Django from "../img/Movie-Cover/Django.png";
import HatefulEight from "../img/Movie-Cover/HatefulEight.jpg";
import OUaTinHollywood from "../img/Movie-Cover/OUaTinHollywood.jpg";
import ReservoirDogs from "../img/Movie-Cover/ReservoirDogs.jpg";

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

function Tarantino() {
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
          <img src={PulpFiction} className="movie__img" />
          <p className="movie__txt">Pulp Fiction</p>
        </div>
        <div className="movie__card">
          <img src={SinCity} className="movie__img" />
          <p className="movie__txt">SinCity</p>
        </div>
        <div className="movie__card">
          <img src={IngloriousBasterds} className="movie__img" />
          <p className="movie__txt">Inglorious Basterds</p>
        </div>
        <div className="movie__card">
          <img src={KillBill1} className="movie__img" />
          <p className="movie__txt">Kill Bill: 1</p>
        </div>
        <div className="movie__card">
          <img src={KillBill2} className="movie__img" />
          <p className="movie__txt">Kill Bill: 2</p>
        </div>
        <div className="movie__card">
          <img src={Django} className="movie__img" />
          <p className="movie__txt">Django: Unchained</p>
        </div>
        <div className="movie__card">
          <img src={HatefulEight} className="movie__img" />
          <p className="movie__txt">The Hateful Eight</p>
        </div>
        <div className="movie__card">
          <img src={OUaTinHollywood} className="movie__img" />
          <p className="movie__txt">Once Uppon a Time... in Hollywood</p>
        </div>
        <div className="movie__card">
          <img src={ReservoirDogs} className="movie__img" />
          <p className="movie__txt">Reservoir Dogs</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Tarantino;
