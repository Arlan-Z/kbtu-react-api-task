import Coin from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';

const score = 0;

export default function Game() {
    return <div className="game-wrapper">
        <div className="score-box">
            <h1>Score</h1> 
            <p>{score}</p>
        </div>

        <Coin/>
        <div className="buttons-box">
            <CoinButton title={"Flip"} bgColor="#4f5d75"/>
            <CoinButton title={"Stop"} bgColor="#c75146"/>
        </div>
    </div>
}