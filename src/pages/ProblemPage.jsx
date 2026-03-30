import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CodeEditor from "../components/Editor";
const ProblemPage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    const fetchProblem = async () => {
      const res = await axios.get(`http://localhost:5000/problems/${id}`);
      setProblem(res.data);
    };
    fetchProblem();
  }, [id]);
  if (!problem) return <div className="text-white p-4">Loading...</div>;
  return (
    <div className="flex h-screen bg-black">
      {/* LEFT - Problem */}
      <div className="w-1/2 p-4 text-white overflow-y-auto border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
        <p className="mb-2">{problem.description}</p>
        <p className="text-sm text-gray-400">Difficulty:{problem.difficulty}</p>
      </div>
      {/* RIGHT - Editor */}
      <div className="w-1/2">
        <CodeEditor problemId={problem._id} />
      </div>
    </div>
  );
};
export default ProblemPage;
