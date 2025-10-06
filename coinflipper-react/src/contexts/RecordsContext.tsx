import { createContext, useState, useContext, type ReactNode, useEffect } from "react";
import { getRecords, postRecord } from "../services/RecordService";
import type { ScoreRecord } from "../models/record";

interface IRecordsContext {
    records: ScoreRecord[];
    addRecord: (record: ScoreRecord) => Promise<boolean>;
}

const RecordsContext = createContext<IRecordsContext | undefined>(undefined);

export const RecordsProvider = ({ children }: { children: ReactNode }) => {
    const [records, setRecords] = useState<ScoreRecord[]>([]);

    const fetchRecords = async () => {
        const fetchedRecords = await getRecords();
        setRecords(fetchedRecords.sort((a, b) => b.score - a.score));
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    const addRecord = async (record: ScoreRecord): Promise<boolean> => {
        const isSuccess = await postRecord(record);
        if (isSuccess) {
            fetchRecords(); 
        }
        return isSuccess;
    };
    
    return (
        <RecordsContext.Provider value={{ records, addRecord }}>
            {children}
        </RecordsContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRecords = () => {
    const context = useContext(RecordsContext);
    if (context === undefined) {
        throw new Error('useRecords must be used within a RecordsProvider');
    }
    return context;
};