import './RecordRow.css';

interface RecordRowProps {
  name: string;
  score: number;
  style?: React.CSSProperties;
  rank: number;
};

export default function RecordRow({ name, score, style, rank }: RecordRowProps) {
    let rankClass = "";
    if (rank === 1) rankClass = "gold";
    else if (rank === 2) rankClass = "silver";
    else if (rank === 3) rankClass = "bronze";

    return <div className={`record-row-wrapper ${rankClass}`} style={style}>
        <p className="name">{name}</p>
        <p className="score">{score}</p>
    </div>
}