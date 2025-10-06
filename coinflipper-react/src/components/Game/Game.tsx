import { useRef, useState } from "react";
import Coin, { type CoinHandle } from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';
import { useRecords } from '../../contexts/RecordsContext';
import type { ScoreRecord } from "../../models/record";

export default function Game() {
    const coinRef = useRef<CoinHandle>(null);
    const [score, setScore] = useState<number>(0);
    const [stopDisabled, setStopDisabled] = useState<boolean>(true);

    const { addRecord } = useRecords();

    const handleFlip = () => {
        const isWin = Math.random() > 0.5;

        coinRef.current?.flipCoin(isWin);

        if (isWin) {
            setScore(prev => prev + 1);
            setStopDisabled(false);
        } else {
            setScore(0);
            setStopDisabled(true);
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
        
        const record: ScoreRecord = { name, score };
        const isSuccess = await addRecord(record);

        if (isSuccess) {
            alert('Record Saved!');
            setStopDisabled(true);
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
            <CoinButton title={"Stop"} bgColor="#c75146" onClick={handleStop} disabled={stopDisabled}/>
        </div>
    </div>
}