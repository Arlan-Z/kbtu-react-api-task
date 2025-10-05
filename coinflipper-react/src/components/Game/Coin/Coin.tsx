import Crown from "../../../assets/crown.png"
import Skull from "../../../assets/skull.png"
import './Coin.css';

const isWin = false;

export default function Coin() {
    return <div className="coin-wrapper">
        <div className={`coin ${isWin ? "win" : "lose"}`}> 
            <img src={isWin ? Crown : Skull} alt="crown-pic" />
        </div>
    </div>
}