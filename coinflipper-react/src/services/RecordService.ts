import type { Record } from "../models/record";

export async function getRecords(): Promise<Record[]> {
    try {
        const response = await fetch("/api"); 
        if (!response.ok) throw new Error("Failed to fetch records");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function postRecord(record: Record): Promise<boolean> {
    try {
        const response = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record),
        });

        if (!response.ok) throw new Error("Failed to post record");

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}