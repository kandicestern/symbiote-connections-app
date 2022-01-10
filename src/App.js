import "./App.css";
import AllConnections from "./components/AllConnections";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ConnectionForm from "./components/ConnectionForm";
import ConnectionDetails from "./components/ConnectionDetails";

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <h1>My Connections</h1>
        </header>
        <Router>
        <div className="App-body">
          <Routes>
            <Route path="/add-connection" element={<ConnectionForm/>} />
            <Route path="/" element={<AllConnections/>} />
            <Route path="/connection-details" element={<ConnectionDetails/>} />
          </Routes>
        </div>
        </Router>
      </div>
    
  );
}

export default App;
