import { useContext } from "react";
import "./Loader.less";
import { screenWidthContext } from "../Spinner/Spinner";

export default function Loader() {
  const isResized = useContext(screenWidthContext);

  return (
    <section className="loader">
      <form>
        <div className={isResized ? "green" : "green animation"}></div>
        <input type="range" name="range" step={1} min={1} max={100} />
      </form>
      <p>Loadind 70%</p>
    </section>
  );
}
