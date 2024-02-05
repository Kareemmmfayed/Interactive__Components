import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Steps from "./Steps/Steps";
import Far from "./FarAway/Far";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/steps" element={<Steps />} />
          <Route path="/" element={<Far />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
