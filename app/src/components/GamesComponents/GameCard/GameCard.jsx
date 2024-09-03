import React from "react";
import classes from "./GameCard.module.css";

export default function GameCard({ id, game, onCardClick }) {
  return (
    <div className={classes["game-card"]} onClick={() => onCardClick(id)}>
      <div className={classes["game-card-info"]}>
        <img
          src={game.image}
          alt={game.title}
          className={classes["game-card-image"]}
        />
        <h3 className={classes["game-card-title"]}>{game.title}</h3>
        <p className={classes["game-card-price"]}>
          {game.price.toLocaleString()}₽
        </p>
      </div>
    </div>
  );
}
