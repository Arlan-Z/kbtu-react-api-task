import { useRef, useState } from "react";
import Coin, { type CoinHandle } from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';
import { postRecord } from "../../services/RecordService";
import type { Record } from "../../models/record";

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

    const handleStop = async () => {
        let name = prompt('Enter your name');

        if (name === null) {
            setScore(0);
            return;
        }

        while (name.trim().length !== 3) {
            name = prompt('Invalid username. Username must be 3 characters long');
            if (name === null) {
                setScore(0);
                return;
            }
        }
        
        const record: Record = {
            name: name,
            score: score
        };

        const isSuccess = await postRecord(record);

        if (isSuccess) {
            alert('Record Saved!');
        } else {
            alert('Some error occured. Try again');
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
            <CoinButton title={"Stop"} bgColor="#c75146" onClick={handleStop}/>
        </div>
    </div>
}