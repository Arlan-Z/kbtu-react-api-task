import { getRecords } from "../../services/RecordService";
import RecordRow from "./RecordRow/RecordRow";
import './RecordTable.css';

const records = await getRecords().then((val) => {
    return val.sort((a, b) => b.score - a.score);
});

export default function RecordTable() {
    return <div className="record-table-wrapper">
        <h1 className="records-title">Records List</h1>

        <div className="records-box">
            {records.map((el) => {
                return <RecordRow name={el.name} score={el.score}/>
            })}
        </div>
    </div>
}