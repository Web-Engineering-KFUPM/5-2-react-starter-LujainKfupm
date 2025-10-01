
import './App.css'
import StudentCard from './components/StudentCard'

function App() {
    return (
        <div className="app">
            <header className="dashboard-header">
                <h1>Student Information Dashboard</h1>
                <p>View and manage student details</p>
            </header>

            <main className="dashboard-main">
                <div className="cards-container">
                    <StudentCard name="Lujain" id="202249140" department="Information and Computer Science" />
                    <StudentCard name="Meznah" id="202268000" department="Information and Computer Science" />
                </div>
            </main>
        </div>
    )
}

export default App

