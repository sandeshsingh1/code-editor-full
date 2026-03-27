import CodeEditor from "../components/Editor";
import Problem from "../components/Problem";
const Home = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Left Panel */}
      <div className="w-1/2 border-r border-gray-700 overflow-y-auto">
        <Problem />
      </div>
      {/* Right Panel */}
      <div className="w-1/2">
        <CodeEditor />
      </div>
    </div>
  );
};
export default Home;
