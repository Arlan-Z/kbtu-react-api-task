import { useRef, useState } from "react";
import Coin, { type CoinHandle } from "./Coin/Coin";
import CoinButton from "./Coin/CoinButton/CoinButton";
import './Game.css';
import { useRecords } from '../../contexts/RecordsContext';
import type { ScoreRecord } from "../../models/record";
import CoinFlipSound from "../../assets/coin-flip.mp3"

export default function Game() {
    const coinRef = useRef<CoinHandle>(null);
    const [score, setScore] = useState<number>(0);
    const [stopDisabled, setStopDisabled] = useState<boolean>(true);
    const [flipDisabled, setflipDisabled] = useState<boolean>(false);
    const { addRecord } = useRecords();

    const coinFlipSound = new Audio(CoinFlipSound);
    coinFlipSound.volume = 0.25;

    const handleFlip = () => {
        const isWin = Math.random() > 0.5;
        coinRef.current?.flipCoin(isWin);

        coinFlipSound.play();

        setflipDisabled(true);
        setStopDisabled(true);

        setTimeout(() => {
            setflipDisabled(false);

            if (isWin) {
                setScore(prev => prev + 1);
                setStopDisabled(false);
            } else {
                setScore(0);
                setStopDisabled(true);
            }
        }, 3000);
    }

    const handleStop = async () => {
        let name = prompt('Enter your name');

        if (name === null) {
            return;
        }

        while (name.trim().length !== 3) {
            name = prompt('Invalid username. Username must be 3 characters long');
            if (name === null) {
                return;
            }
        }
        
        const record: ScoreRecord = { name, score };
        setScore(0);
        const isSuccess = await addRecord(record);

        if (isSuccess) {
            alert('Record Saved!');
            setStopDisabled(true);
        } else {
            alert('Some error occured. Try again');
        }
    }

    return (
        <div className="game-wrapper">
            <div className="score-box">
                <h1>Score</h1> 
                <p>{score}</p>
            </div>

            <Coin ref={coinRef}/>
            <div className="buttons-box">
                <CoinButton title={"Flip"} bgColor="#4f5d75" onClick={handleFlip} disabled={flipDisabled}/>
                <CoinButton title={"Stop"} bgColor="#c75146" onClick={handleStop} disabled={stopDisabled}/>
            </div>
        </div>
    );
}