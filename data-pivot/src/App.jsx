import React, { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import QuerySelector from "./components/QuerySelector/QuerySelector";
import QueryEditor from "./components/QueryEditor/QueryEditor";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import { predefinedDataSets, predefinedQueries, customQueryData } from "./helpers/Query";
import QueryHistory from "./components/QueryHistory/QueryHistory";
import InsertDataForm from "./components/InertTable/InsertDataForm";


const App = () => {
  const [queryType, setQueryType] = useState("predefined");
  const [selectedQuery, setSelectedQuery] = useState(predefinedQueries[0]);
  const [customQuery, setCustomQuery] = useState("");
  const [queryResult, setQueryResult] = useState(predefinedDataSets[selectedQuery]);
  const [queryHistory, setQueryHistory] = useState([]);
  



  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("queryHistory")) || [];
    setQueryHistory(history);
  }, []);

  const runQuery = () => {
    let result = [];

    if (queryType === "predefined") {
      result = predefinedDataSets[selectedQuery] || [];
    } else if (queryType === "custom") {
      result = customQueryData
    }
    setQueryResult(result);

    const newQuery = queryType === "predefined" ? selectedQuery : customQuery;
    if (queryHistory.length === 0 || newQuery !== queryHistory[0]) {
      const newHistory = [newQuery, ...queryHistory.slice(0, 50)];
      setQueryHistory(newHistory);
      localStorage.setItem("queryHistory", JSON.stringify(newHistory));
    }
  };

  const runQueryFromHistory = (query) => {
    let result = [];

    if (predefinedQueries.includes(query)) {
      result = predefinedDataSets[query]
    }
    else {
      result = customQueryData
    }

    console.log("result", result)

    setQueryResult(result);
    if (query !== queryHistory[0]) {
      const newHistory = [query, ...queryHistory.slice(0, 50)];
      setQueryHistory(newHistory);
      localStorage.setItem("queryHistory", JSON.stringify(newHistory));
    }
  }

  const copyToQueryEditor = (query) => {
    setQueryType("custom");
    setCustomQuery(query);
    scrollTo(0, 0)
  }

  const copyQueryToClipboard = () => {
    const queryToCopy = queryType === "predefined" ? selectedQuery : customQuery;

    if (!queryToCopy) {
      alert("No query to copy.");
      return;
    }

    navigator.clipboard.writeText(queryToCopy).then(() => {
      alert("Query copied to clipboard!");
    }).catch(err => console.error("Failed to copy:", err));
  };


  return (
    <div className="app">
      <ThemeToggle />
      <QuerySelector
        queryType={queryType}
        setQueryType={setQueryType}
        selectedQuery={selectedQuery}
        setSelectedQuery={setSelectedQuery}
        predefinedQueries={predefinedQueries}
      />
      {queryType === "custom" && (
        <div className="query-editor-container">
          <QueryEditor customQuery={customQuery} setCustomQuery={setCustomQuery} runQuery={runQuery} />
        </div>
      )}

      {queryType === "insert" && (<InsertDataForm columns={["ID", "Name", "Age", "City"]} />)}

      {queryType === "custom" ? null : (
        <button onClick={runQuery} className="run-btn">Run</button>
      )}

      <button className="copy-btn" onClick={copyQueryToClipboard}>Copy Query</button>


      <Table data={queryResult} />


      <QueryHistory copyToQueryEditor={copyToQueryEditor} runQueryFromHistory={runQueryFromHistory} queryHistory={queryHistory} />

    </div>
  );
};

export default App;
