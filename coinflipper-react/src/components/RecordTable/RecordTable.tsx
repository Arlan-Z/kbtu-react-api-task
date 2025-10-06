import { useState, useEffect } from "react";
import { useRecords } from "../../contexts/RecordsContext";
import RecordRow from "./RecordRow/RecordRow";
import "./RecordTable.css";

export default function RecordTable() {
    const { records } = useRecords();
    const [visibleCount, setVisibleCount] = useState(7); 
    const [displayedRecords, setDisplayedRecords] = useState(records.slice(0, 6));

    useEffect(() => {
        setDisplayedRecords(records.slice(0, visibleCount));
    }, [records, visibleCount]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setVisibleCount(prev => {
                    if (prev < records.length) {
                        return prev + 1; 
                    }
                    return prev;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [records]);

    return (
        <div className="record-table-wrapper">
            <h1 className="records-title">Leaderboard</h1>
            <div className="records-box">
                {displayedRecords.map((el, i) => (
                    <RecordRow key={i} name={el.name} score={el.score} />
                ))}
            </div>
        </div>
    );
}
