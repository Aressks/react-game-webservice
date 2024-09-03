import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "../GamesComponents/GameCard/GameCard";

export default function SliderCatalog({ games }) {
  const navigate = useNavigate();
  function handleCardClick(id) {
    navigate(`/game/${id}`);
  }

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 4, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество слайдов, прокручиваемых за один раз
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Object.keys(games).map((id) => (
        <GameCard
          key={id}
          id={id}
          game={games[id]}
          onCardClick={handleCardClick}
        />
      ))}
    </Slider>
  );
}
