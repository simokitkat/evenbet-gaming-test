import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Spinner from "./components/Spinner/Spinner";
import info from "./components/PlayerInfo/playerInformation";
import Loader from "./components/Loader/Loader";
import TournamentItem from "./components/TournamentItem/TournamentItem";
import "./tournament-items.less";
import data from "./components/TournamentItem/data";

function App() {
  return (
    <>
      <Spinner />
      <PlayerInfo
        avatar={info.avatar}
        stars={info.stars}
        userName={info.userName}
        balance={info.balance}
      />
      <Loader />
      <section className="tournament-items">
        <div className="container">
          {data.map((item, i) => {
            return <TournamentItem key={i} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
