import React from "react";
import "./MainContent.css";
import BestGamesSlider from "./Sections/BestGamesSlider";
import AllCatalogGames from "./Sections/AllCatalogGames";

export default function MainContent() {
  return (
    <main className="main-content">
      <BestGamesSlider />
      <AllCatalogGames />
    </main>
  );
}
