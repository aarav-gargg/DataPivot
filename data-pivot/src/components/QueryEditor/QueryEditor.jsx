import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./QueryEditor.css";

const QueryEditor = ({ customQuery, setCustomQuery, runQuery }) => {
  return (
    <div className="query-editor">
      <CodeMirror
        value={customQuery}
        height="150px"
        extensions={[sql()]}
        theme="dark"
        onChange={(value) => setCustomQuery(value)}
      />
      <button className="run-btn" onClick={runQuery}>
        Run Query
      </button>
    </div>
  );
};

export default QueryEditor;
