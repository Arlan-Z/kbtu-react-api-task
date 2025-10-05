import './CoinButton.css';

export default function CoinButton({ title, bgColor: textColor }: { title: string, bgColor: string }) {
    return <div className="coin-btn-wrapper">
        <button className='coin-btn' style={{ backgroundColor: textColor }}>{title}</button>
    </div>
}