import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../MainContent/Sections/image3.png";
import image from "../../MainContent/Sections/testi.jpg";
import classes from "./CardDetailPage.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardDetailPage = () => {
  const { id } = useParams();

  const cardDetails = {
    1: {
      title: "Zombie land",
      description: `Zombie land - многопользовательская игры`,

      image,
      logo,
      nameCompany: "Ran games",
    },
    2: {
      title: "Card 2",
      description: "Full description for Card 2",
      image,
      logo,
      nameCompany: "Meto",
    },
    3: {
      title: "Card 3",
      description: "Full description for Card 3",
      image,
      logo,
      nameCompany: "Elic",
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const card = cardDetails[id];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.promo}>
          <h1>{card?.title || "Card not found"}</h1>
          <div className={classes["promo-block"]}>
            <Slider {...settings}>
              <div>
                <video controls width="100%">
                  <source src={card?.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <img src={card?.image} alt="Screenshot 1" width="100%" />
              </div>
              <div>
                <img src={card?.image} alt="Screenshot 2" width="100%" />
              </div>
            </Slider>
          </div>
          <div className={classes["description"]}>
            <hr />
            <p>{card?.description || "No description available"}</p>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.preview}>
            <img src={card.image} alt={card.title} />
          </div>
          <div className={classes["info-company"]}>
            <h2>Разработчик:</h2>
            <h2>{card?.nameCompany}</h2>
          </div>
          <div className={classes["info-company"]}>
            <h2>Издатель:</h2>
            <h2>{card?.nameCompany}</h2>
          </div>
          <hr />
          <div className={classes["button"]}>
            <button className={classes["button-buy"]}>Купить</button>
            <button
              className={classes["button-buy"]}
              style={{ backgroundColor: "green" }}
            >
              В корзину
            </button>
            <button
              className={classes["button-buy"]}
              style={{ backgroundColor: "purple" }}
            >
              В избранное
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailPage;
