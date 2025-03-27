import React, { useState , useEffect } from "react";
import "./Table.css";

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(data[0]);

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const firstColumn = columns[0]; 
      if (a[firstColumn] < b[firstColumn]) return isSorted ? 1 : -1;
      if (a[firstColumn] > b[firstColumn]) return isSorted ? -1 : 1;
      return 0;
    });

    setSortedData(sorted);
    setIsSorted(!isSorted); 
  };

  return (
    <div className="table-wrapper">
      <button className="sort-btn" onClick={handleSort}>
        {isSorted ? "Sort Descending" : "Sort Ascending"}
      </button>

      <div className="table-header">
        {columns.map((col, i) => (
          <div key={i} className="table-cell table-header-cell">
            {col}
          </div>
        ))}
      </div>

      {sortedData.map((row, index) => (
        <div key={index} className="table-row">
          {columns.map((col, i) => (
            <div key={i} className="table-cell">
              {row[col]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
