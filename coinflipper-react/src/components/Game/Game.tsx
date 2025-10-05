import { useRef } from "react";
import Coin, { type CoinHandle } from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';

const score = 0;

export default function Game() {
    const coinRef = useRef<CoinHandle>(null);

    const handleFlip = () => {
        coinRef.current?.flipCoin();
    }

    return <div className="game-wrapper">
        <div className="score-box">
            <h1>Score</h1> 
            <p>{score}</p>
        </div>

        <Coin ref={coinRef}/>
        <div className="buttons-box">
            <CoinButton title={"Flip"} bgColor="#4f5d75" onClick={handleFlip}/>
            <CoinButton title={"Stop"} bgColor="#c75146"/>
        </div>
    </div>
}