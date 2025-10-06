import { forwardRef, useState, useImperativeHandle } from "react";
import Crown from "../../../assets/crown.png"
import Skull from "../../../assets/skull.png"
import './Coin.css';

const Coin = forwardRef((_, ref) => {
    const [coinStyles, setCoinStyles] = useState<string>('');

    useImperativeHandle(ref, () => ({
        flipCoin: (isWin : boolean) => {
            setCoinStyles('');

            if (isWin) {
                setCoinStyles('heads');
                setTimeout(() => setCoinStyles(''), 3000);
            } else {
                setCoinStyles('tails');
                setTimeout(() => setCoinStyles('back'), 3000);
            }
            
        }
    }));

    return (
        <div className={`coin ${coinStyles}`}>
            <div className="win">
                <img src={Crown} alt="crown-pic" />
            </div>
            <div className="lose">
                <img src={Skull} alt="skull-pic" />
            </div>
        </div>
    );
});

export default Coin;

export interface CoinHandle {
    flipCoin: (isWin: boolean) => void;
}