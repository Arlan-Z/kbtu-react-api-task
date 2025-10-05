import RecordRow from "./RecordRow/RecordRow";

const arr = [
    {
        user: 'Arlan',
        score: 5,
    },
    {
        user: 'Greg',
        score: 3,
    },
    {
        user: 'Steve',
        score: 4,
    }
];

export default function RecordTable() {
    return <div className="record-table-wrapper">
        {arr.map((el) => {
            return <RecordRow name={el.user} score={el.score}/>
        })}
    </div>
}