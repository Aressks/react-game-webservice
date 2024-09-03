import React from "react";
import classes from "./GameCatalog.module.css";
import GameCard from "./GameCard/GameCard";

export default function GameCatalog({ games, onCardClick }) {
  return (
    <div className={classes["game-catalog"]}>
      {Object.keys(games).map((id) => (
        <GameCard id={id} game={games[id]} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
