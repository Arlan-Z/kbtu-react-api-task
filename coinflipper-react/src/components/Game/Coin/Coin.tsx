import { forwardRef, useState, useImperativeHandle } from "react";
import Crown from "../../../assets/crown.png"
import Skull from "../../../assets/skull.png"
import './Coin.css';

const Coin = forwardRef((_, ref) => {
    const [isWin, setIsWin] = useState(false);

    useImperativeHandle(ref, () => ({
        flipCoin: () => setIsWin(Math.random() > 0.5)
    }));

    return (
        <div className={`coin ${isWin ? "win" : "lose"}`}>
        <img src={isWin ? Crown : Skull} alt="coin-pic" />
        </div>
    );
});

export default Coin;

export interface CoinHandle {
    flipCoin: () => void;
}