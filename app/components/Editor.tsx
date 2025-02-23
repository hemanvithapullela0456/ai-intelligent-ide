"use client";
import React, { useRef } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";


interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  const monaco = useMonaco();
  const editorRef = useRef(null);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  return (
    <div className="w-full h-[500px] border rounded-lg shadow-md">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={handleEditorChange}
        onMount={(editor) => {
          editorRef.current = editor;
        }}
      />
    </div>
  );
};

export default CodeEditor;
