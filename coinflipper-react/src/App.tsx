import './App.css'
import Game from './components/Game/Game'
import { RecordsProvider } from './contexts/RecordsContext'
import RecordTable from './components/RecordTable/RecordTable'

export default function App() {
    return (
        <RecordsProvider>
            <div className="app-wrapper">
                <Game/>
                <RecordTable/>
            </div>
        </RecordsProvider>
    )
}
