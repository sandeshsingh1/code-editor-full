import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(`// Write your code here`);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    // Dummy output (backend later)
   setOutput("Output:\n(backend not connected yet)");
  };

  return (
    <div className="h-screen flex flex-col bg-black">

      {/* 🔹 Top Bar */}
      <div className="flex justify-between items-center bg-gray-900 px-4 py-2">

        {/* Language Selector */}
        <select
          className="bg-gray-800 text-white px-2 py-1 rounded"
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
          Run Code
        </button>
      </div>

      {/* 🔹 Editor */}
      <Editor
        height="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />

      {/* 🔹 Input Box */}
      <div className="p-2 bg-gray-900">
        <p className="text-white mb-1">Input</p>
        <textarea
          className="w-full h-20 bg-gray-800 text-white p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom input..."
        />
      </div>

      {/* 🔹 Output Console */}
      <div className="p-2 bg-black border-t border-gray-700">
        <p className="text-white mb-1">Output</p>
        <div className="bg-gray-900 text-green-400 p-2 h-24 overflow-y-auto rounded">
          {output}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;