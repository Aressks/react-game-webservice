import React from "react";
import SliderCatalog from "../../Slider/SliderCatalog";
import image from "./testi.jpg";
import classes from "./SliderGamesCatalog.module.css";

const games = {
  1: {
    title: "Zombie land",
    price: 999,
    image: image,
  },
  2: {
    title: "Zombie 2",
    price: 550,
    image: image,
  },
  3: {
    title: "Lo",
    price: 250,
    image: image,
  },
  4: {
    title: "Astral",
    price: 300,
    image: image,
  },
  5: {
    title: "Epic games",
    price: 10000,
    image: image,
  },
  6: {
    title: "games",
    price: 11000,
    image: image,
  },
  7: {
    title: "Epic",
    price: 11000,
    image: image,
  },
};

export default function BestGamesSlider() {
  return (
    <div className={classes.slider}>
      <h2>Лучшие игры</h2>
      {Object.keys(games).length === 0 ? (
        <h3>Нет данных</h3>
      ) : (
        <SliderCatalog games={games} />
      )}
      <hr />
    </div>
  );
}
