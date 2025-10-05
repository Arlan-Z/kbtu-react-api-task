import RecordRow from "./RecordRow/RecordRow";
import './RecordTable.css';

const arr = [
    {
        user: 'Arl',
        score: 5,
    },
    {
        user: 'Gre',
        score: 3,
    },
    {
        user: 'Ste',
        score: 4,
    }
];

export default function RecordTable() {
    return <div className="record-table-wrapper">
        <h1 className="records-title">Records List</h1>

        <div className="records-box">
            {arr.map((el) => {
                return <RecordRow name={el.user} score={el.score}/>
            })}
        </div>
    </div>
}