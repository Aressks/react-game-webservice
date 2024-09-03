import React from "react";
import { useNavigate } from "react-router-dom";
import image from "./testi.jpg";
import GameCatalog from "../../GamesComponents/GameCatalog";

const games = {
  1: { title: "Zombie land", price: 999, image: image },
  2: { title: "Zombie 2", price: 550, image: image },
  3: { title: "Lo", price: 250, image: image },
  4: { title: "Astral", price: 300, image: image },
  5: { title: "Epic games", price: 10000, image: image },
};

export default function AllCatalogGames() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <div>
      <h2>Все игры</h2>
      {Object.keys(games).length === 0 ? (
        <h3>Нет данных</h3>
      ) : (
        <GameCatalog games={games} onCardClick={handleCardClick} />
      )}
    </div>
  );
}
