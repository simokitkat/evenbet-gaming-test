import "./Spinner.less";
import spinnerIMG from "../../assets/spiner.svg";
import { createContext, useEffect, useState } from "react";

export const screenWidthContext = createContext();

export default function Spinner() {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    function handleWidthChange() {
      setIsResized(true);
    }

    window.addEventListener("resize", handleWidthChange);
  });

  return (
    <screenWidthContext.Provider value={{ isResized }}>
      <section className="spinner">
        <h1>Poker</h1>
        <div className={isResized ? "circle active" : "circle"}>
          <img src={spinnerIMG} alt="spinner" />
        </div>
      </section>
    </screenWidthContext.Provider>
  );
}
