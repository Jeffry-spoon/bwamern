import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/Image/img-hero.jpg";
import ImageHero_ from "assets/Image/img-hero-frame.png";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5 " style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 " style={{ color: "#152c5b", marginBottom: "20px" }}>
              Forget busy work,
              <br /> start next vacation
            </h1>
            <p className=" font-weight-light w-100" style={{ lineHeight: "170%", fontSize: "16px", fontStyle: "light", color: "#B0B0B0", marginBottom: "40px" }}>
              We provide what you need to enjoy your holiday with family.
              <br /> Time to make another memorable moments.Your money can
              <br /> return, but your time is not.
            </p>
            <Button className="btn px-5" style={{ fontSize: "18px" }} hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className="row " style={{ marginTop: 50 }}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img width="36" height="36" src="/images/ic_traveler.png" alt={`${props.data.travelers}Travelers`} />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light" style={{ color: "#b0b0b0", fontWeight: 300 }}>
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img width="36" height="36" src="/images/ic_treasure.png" alt={`${props.data.treasures}Treasures`} />
                <h6 className="mt-3 " style={{ color: "#454D66" }}>
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light" style={{ color: "#b0b0b0", fontWeight: 300 }}>
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img width="36" height="36" src="/images/ic_cities.png" alt={`${props.data.cities}Cities`} />
                <h6 className="mt-3" style={{ color: "#454D66" }}>
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500" style={{ color: "#b0b0b0", fontWeight: 300 }}>
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 550, height: 407 }}>
              <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1, width: 550 }} />
              <img src={ImageHero_} alt="Room with couches frame " className="img-fluid position-absolute" style={{ margin: "0 10px 10px 20px", width: 530 }} />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
