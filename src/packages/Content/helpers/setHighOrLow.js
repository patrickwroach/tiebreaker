import Randomizer from "react-randomizer";

export default function setHighOrLow() {
    let randomizedHighWins = Randomizer.randomNumber(0, 1) > 0;
    this.setState({
      highWins:randomizedHighWins 
    })
  }

