/* eslint-disable react/prop-types */
import "./TournamentItem.less";
import pin from "../../assets/pin.svg";
import time from "../../assets/time.svg";
import players from "../../assets/players.svg";
import trophy from "../../assets/tourney.svg";
import { useState } from "react";

export default function TournamentItem({
  isRegistered,
  isPinned,
  tag,
  isOtherIcons,
  otherIcons,
  tournament,
  tournamentColor,
  dateTime,
  playersNumber,
  tropheysNumber,
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={isPressed ? "tournament-item pressed" : "tournament-item"}
      tabIndex={1}
      onClick={() => setIsPressed(true)}
    >
      <button className={isRegistered ? "reg-status active" : "reg-status"}>
        {isRegistered ? "Registering" : "Canceled"}
      </button>

      <div className="top">
        {/* LEFT */}
        <div className="left">
          <div className="details">
            {isPinned ? <img src={pin} alt="pin" className="pin" /> : ""}
            <div className="tag">{tag}</div>
            {isOtherIcons ? (
              <div className="other-icons">
                {otherIcons.map((icon) => {
                  return <img src={icon} alt="icon" key={icon} />;
                })}
              </div>
            ) : (
              ""
            )}
          </div>
          <h2 className={"tournament " + tournamentColor}>{tournament}</h2>
        </div>

        {/* RIGHT */}
        <div className="right">
          <button className={isRegistered ? "green" : "grey"}>
            {isRegistered ? "Join table" : "Cancelled"}
          </button>
        </div>
      </div>

      <div className="bottom">
        {/* TIME */}
        <div className="time">
          <img src={time} alt="clock" />
          <span>{dateTime}</span>
        </div>
        <div className="stats">
          {/* PLAYERS */}
          <div className="players">
            <img src={players} alt="players" />
            <span>{playersNumber}</span>
          </div>
          {/* TROPHYS */}
          <div className="tropheys">
            <img src={trophy} alt="trophy" />
            <span>{tropheysNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
