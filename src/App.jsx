import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Spinner from "./components/Spinner/Spinner";
import info from "./components/PlayerInfo/playerInformation";

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
    </>
  );
}

export default App;
