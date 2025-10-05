import CoinButton from "./CoinButton/CoinButton";
import './Coin.css';

export default function Coin() {
    return <div className="coin-wrapper">
        <div className="coin"/>
        <div className="buttons-box">
            <CoinButton title={"Flip"} bgColor="#4f5d75"/>
            <CoinButton title={"Stop"} bgColor="#ff8811"/>
        </div>
    </div>
}