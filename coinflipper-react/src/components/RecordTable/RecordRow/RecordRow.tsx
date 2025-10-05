import './RecordRow.css';

export default function RecordRow({ name, score } : { name: string, score: number}) {
    return <div className="record-row-wrapper">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
    </div>
}