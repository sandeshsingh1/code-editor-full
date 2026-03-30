import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get("http://localhost:5000/submissions/stats");
      setStats(res.data);
    };

    fetchStats();
  }, []);

  if (!stats) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="bg-gray-800 p-4 rounded mb-3">
        <p>Total Submissions: {stats.total}</p>
        <p>Accepted: {stats.accepted}</p>
        <p>Success Rate: {stats.successRate.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Dashboard;