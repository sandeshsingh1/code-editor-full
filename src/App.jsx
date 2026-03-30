import { Routes, Route } from "react-router-dom";
import Problems from "./pages/Problems";
import ProblemPage from "./pages/ProblemPage";
import Dashboard from "./pages/Dashboard.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Problems />} />
      <Route path="/problem/:id" element={<ProblemPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;