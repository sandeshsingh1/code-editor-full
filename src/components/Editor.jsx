import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(`// Write your code here`);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = () => {
    setLoading(true);

    // simulate delay (like backend call)
    setTimeout(() => {
      setOutput("Output:\n(backend not connected yet)");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="h-screen flex flex-col bg-black">

      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center bg-gray-900 px-4 py-2">
        
        {/* Language Selector */}
        <select
          className="bg-gray-800 text-white px-2 py-1 rounded outline-none"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>

        {/* Run Button */}
        <button
          onClick={runCode}
          className="bg-green-600 px-4 py-1 rounded text-white hover:bg-green-700"
        >
          {loading ? "Running..." : "Run Code"}
        </button>
      </div>

      {/* 🔹 Editor (flex-1 FIX) */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>

      {/* 🔹 Input Box */}
      <div className="p-2 bg-gray-900 border-t border-gray-700">
        <p className="text-white mb-1 text-sm">Input</p>
        <textarea
          className="w-full h-20 bg-gray-800 text-white p-2 rounded outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom input..."
        />
      </div>

      {/* 🔹 Output Console */}
      <div className="p-2 bg-black border-t border-gray-700">
        <p className="text-white mb-1 text-sm">Output</p>
        <div className="bg-gray-900 text-green-400 p-2 h-24 overflow-y-auto rounded text-sm whitespace-pre-wrap">
          {output || "No output yet..."}
        </div>
      </div>

    </div>
  );
};

export default CodeEditor;