"use client";
import React, { useState } from "react";
import CodeEditor from "./components/Editor";

export default function Home() {
  const [code, setCode] = useState("// Write your code here...");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">AI-Powered Intelligent IDE</h1>
      <CodeEditor code={code} setCode={setCode} />
    </main>
  );
}
