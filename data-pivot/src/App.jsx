import React, { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import QuerySelector from "./components/QuerySelector/QuerySelector";
import QueryEditor from "./components/QueryEditor/QueryEditor";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import { predefinedDataSets, predefinedQueries, customQueryData } from "./helpers/Query";


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


    const newHistory = [queryType === "predefined" ? selectedQuery : customQuery, ...queryHistory.slice(0, 4)];
    setQueryHistory(newHistory);
    localStorage.setItem("queryHistory", JSON.stringify(newHistory));
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
    const newHistory = [query, ...queryHistory.slice(0, 4)];
    setQueryHistory(newHistory);
    localStorage.setItem("queryHistory", JSON.stringify(newHistory));
  }

  const copyToQueryEditor = (query) => {
    setQueryType("custom");
    setCustomQuery(query);
    scrollTo(0,0)
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

      {queryType === "custom" ? null : (
        <button onClick={runQuery} className="run-btn">Run</button>
      )}

      <button className="copy-btn" onClick={copyQueryToClipboard}>Copy Query</button>


      <Table data={queryResult} />


      {queryHistory.length > 0 && (
        <div className="query-history">
          <h3>Query History</h3>
          <ul>
            {queryHistory.map((query, index) => (
              <li key={index}>
                <div className="execute-history">
                  {query}
                  <div>
                    <button className="history-button" onClick={() => runQueryFromHistory(query)}>Execute Query</button>
                    <button className="copy-custom-button" onClick={() => copyToQueryEditor(query)}>Copy to Custom</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
