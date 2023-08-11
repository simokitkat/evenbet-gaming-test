import knockOut from "../../assets/Knockout.svg";
import bounty from "../../assets/Bounty.svg";
import proBounty from "../../assets/ProBounty.svg";
import freeRoll from "../../assets/FreeRoll.svg";
import rapid from "../../assets/Rapid.svg";
import stopWatch from "../../assets/stopWatch.svg";

const data = [
  {
    isRegistered: true,
    isPinned: true,
    tag: "NL 2-7 Triple Draw",
    isOtherIcons: false,
    otherIcons: [],
    tournament: "OFC Pineapple",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "1000/1000",
    tropheysNumber: "1000000",
  },
  {
    isRegistered: true,
    isPinned: true,
    tag: "NL Holdem",
    isOtherIcons: false,
    otherIcons: [],
    tournament: "OFC Pineapple",
    tournamentColor: "green",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "1/6",
    tropheysNumber: "100",
  },
  {
    isRegistered: false,
    isPinned: true,
    tag: "NL OFC/pineapple prg",
    isOtherIcons: true,
    otherIcons: [stopWatch, freeRoll],
    tournament: "Hourly Freeroll",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "1/10 000",
    tropheysNumber: "1000",
  },
  {
    isRegistered: false,
    isPinned: false,
    tag: "PL Omaha h/l",
    isOtherIcons: false,
    otherIcons: [],
    tournament: "Rapid Tournament",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "0/0",
    tropheysNumber: "1000000",
  },
  {
    isRegistered: false,
    isPinned: false,
    tag: "NL 6 cards omaha h/l",
    isOtherIcons: true,
    otherIcons: [rapid],
    tournament: "PL Omaha Knockout",
    tournamentColor: "yellow",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "0/100",
    tropheysNumber: "146",
  },
  {
    isRegistered: true,
    isPinned: false,
    tag: "NL 2-7 Triple Draw",
    isOtherIcons: false,
    otherIcons: [],
    tournament: "OFC Pineapple",
    dateTime: "12:00 pm, 28 July",
    playersNumber: "1000/1000",
    tropheysNumber: "1000000",
  },
];

export default data;
