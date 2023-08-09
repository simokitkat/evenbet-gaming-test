import "./Spinner.less";
import spinnerIMG from "../../assets/spiner.svg";
import { useState } from "react";

export default function Spinner() {
  const [spin, setSpin] = useState("circle");

  window.onresize = function () {
    setSpin("circle active");
  };

  return (
    <section className="spinner">
      <h1>Poker</h1>
      <div className={spin}>
        <img src={spinnerIMG} alt="spinner" />
      </div>
    </section>
  );
}
