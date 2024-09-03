import React from "react";
import classes from "./Footer.module.css";
import images from "../../assets/images";

export default function Footer() {
  return (
    <div className={classes["footer-container"]}>
      <footer className={classes["footer"]}>
        <ul className={classes["footer-ul"]}>
          <li>
            <img src={images.youtubeIcon} alt="Youtube icon" />
            <a href="https://www.youtube.com/">Youtube</a>
          </li>
          <li>
            <img src={images.telegramIcon} alt="Telegram icon" />
            <a href="https://www.youtube.com/">Telegram chanel</a>
          </li>
          <li>
            <img src={images.emailIcon} alt="Email icon" />
            <a href="https://www.youtube.com/">Email</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
