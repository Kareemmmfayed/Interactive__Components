import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Steps from "./Steps/Steps";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Steps />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
