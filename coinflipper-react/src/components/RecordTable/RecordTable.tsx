import { useRecords } from '../../contexts/RecordsContext';
import RecordRow from "./RecordRow/RecordRow";
import './RecordTable.css';


export default function RecordTable() {
    const { records } = useRecords();

    return <div className="record-table-wrapper">
        <h1 className="records-title">Records List</h1>

        <div className="records-box">
            {records.map((el, i) => {
                return <RecordRow name={el.name} score={el.score} key={i}/>
            })}
        </div>
    </div>
}