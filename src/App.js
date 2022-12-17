import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CPR Application</h1>
        <p>
          SPA - Learn and perform CPR
        </p>
      </header>

    <div className="options"></div>
    
    <div className="learnCPR">
      <button type="button">Learn CPR</button>
    </div>
    {/* ROUTE TO LEARN CPR - STEP BY STEP INSTRUCTIONS */}

    <div className="performCPR">
      <button type="button">Perform CPR</button>
    </div>
    {/* ROUTE TO PERFORM CPR - STEP BY STEP & FEATURES (METRONOME) */}

    <div className="aboutCPR">
      <button type="button">About</button>
    </div>
    {/* ROUTE TO ABOUT CPR - STEP BY STEP & FEATURES (METRONOME) */}
    
  </div>
  );
}

export default App;
