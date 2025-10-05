import { useRef, useState } from "react";
import Coin, { type CoinHandle } from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';

export default function Game() {
    const coinRef = useRef<CoinHandle>(null);
    const [score, setScore] = useState<number>(0);

    const handleFlip = () => {
        const isWin = Math.random() > 0.5;

        coinRef.current?.flipCoin(isWin);

        if (isWin) {
            setScore(prev => prev + 1);
        } else {
            setScore(0);
        }
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