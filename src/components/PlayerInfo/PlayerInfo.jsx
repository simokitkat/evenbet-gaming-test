/* eslint-disable react/prop-types */
import { useState } from "react";
import eye from "../../assets/unvisible.svg";
import openEye from "../../assets/visible.svg";
import "./PlayerInfo.less";

export default function PlayerInfo({ userName, stars, avatar, balance }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="player-info">
      <div className="container">
        <div className="username">
          <span>{userName}</span>
          <img src={stars} alt="stars" />
        </div>

        <img src={avatar} alt="avatar" className="avatar" />

        <div className={isVisible ? "balance shown" : "balance"} tabIndex={1}>
          <a className="eye" href="#" onClick={() => setIsVisible(!isVisible)}>
            <img src={!isVisible ? openEye : eye} alt="unvisible" />
          </a>
          <span>{isVisible ? balance : "show balance"}</span>
        </div>
      </div>
    </section>
  );
}
