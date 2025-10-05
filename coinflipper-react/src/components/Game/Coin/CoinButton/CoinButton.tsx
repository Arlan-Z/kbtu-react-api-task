import './CoinButton.css';

interface CoinButtonProps {
    title: string, 
    bgColor: string,
    onClick?: () => void,
    disabled?: boolean
}

export default function CoinButton({ title, bgColor: textColor, onClick, disabled = false, }: CoinButtonProps) {
    return <div className="coin-btn-wrapper">
        <button className='coin-btn' style={{ backgroundColor: textColor }} onClick={onClick} disabled = {disabled}>
            {title}
        </button>
    </div>
}