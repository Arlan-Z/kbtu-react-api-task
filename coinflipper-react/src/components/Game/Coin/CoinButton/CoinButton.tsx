import './CoinButton.css';

interface CoinButtonProps {
    title: string, 
    bgColor: string,
    onClick?: () => void
}

export default function CoinButton({ title, bgColor: textColor, onClick }: CoinButtonProps) {
    return <div className="coin-btn-wrapper">
        <button className='coin-btn' style={{ backgroundColor: textColor }} onClick={onClick}>
            {title}
        </button>
    </div>
}