import { Routes, Route } from "react-router-dom";
import Problems from "./pages/Problems";
import ProblemPage from "./pages/ProblemPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Problems />} />
      <Route path="/problem/:id" element={<ProblemPage />} />
    </Routes>
  );
}

export default App;