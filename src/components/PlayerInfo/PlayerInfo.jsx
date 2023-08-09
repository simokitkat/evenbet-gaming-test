/* eslint-disable react/prop-types */
import eye from "../../assets/unvisible.svg";

export default function PlayerInfo({ userName, stars, avatar }) {
  return (
    <section className="player-info">
      <div className="container">
        <div className="username">
          <span>{userName}</span>
          <img src={stars} alt="stars" />
        </div>

        <img src={avatar} alt="avatar" />

        <div className="balance">
          <a href="#">
            <img src={eye} alt="unvisible" />
          </a>
          <span>show balance</span>
        </div>
      </div>
    </section>
  );
}
