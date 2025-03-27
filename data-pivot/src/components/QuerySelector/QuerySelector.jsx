import React from "react";
import './QuerySelector.css'

const QuerySelector = ({ queryType, setQueryType, selectedQuery, setSelectedQuery, predefinedQueries }) => {
  return (
    <div className="query-selector">
      <div className="type-options">
      <label>
        <input
          type="radio"
          name="queryType"
          value="predefined"
          checked={queryType === "predefined"}
          onChange={() => setQueryType("predefined")}
        />
        Predefined Query
      </label>
      <label>
        <input
          type="radio"
          name="queryType"
          value="custom"
          checked={queryType === "custom"}
          onChange={() => setQueryType("custom")}
        />
        Custom Query
      </label>

      <label>
        <input
          type="radio"
          name="queryType"
          value="insert"
          checked={queryType === "insert"}
          onChange={() => setQueryType("insert")}
        />
        Insert Query
      </label>
      </div>

      {queryType === "predefined" && (
        <select value={selectedQuery} onChange={(e) => setSelectedQuery(e.target.value)}>
          {predefinedQueries.map((query, index) => (
            <option key={index} value={query}>
              {query}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default QuerySelector;
