import './App.css'
import Game from './components/Game/Game'
import RecordTable from './components/RecordTable/RecordTable'

export default function App() {
    return (
        <div className="app-wrapper">
        <Game/>
        <RecordTable/>
        </div>
    )
}
