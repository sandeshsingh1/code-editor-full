import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
const Problems = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProblems = async () => {
      const res = await axios.get("http://localhost:5000/problems");
      console.log("All Problems:", res.data); // 🔍 DEBUG
      setProblems(res.data);
    };
    fetchProblems();
  }, []);
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">Problems</h1>
      {problems.map((p) => (
        <div
          key={p._id}
          onClick={() => {
            console.log("FULL OBJECT:", p);   // 🔍 DEBUG
            console.log("ID:", p._id);        // 🔍 DEBUG
            navigate(`/problem/${p._id}`);
          }}
          className="bg-gray-800 p-3 mb-2 rounded cursor-pointer hover:bg-gray-700"
        >
          <h2 className="font-bold">{p.title}</h2>
          <p className="text-sm text-gray-400">{p.difficulty}</p>
        </div>
      ))}
    </div>
  );
};
export default Problems;