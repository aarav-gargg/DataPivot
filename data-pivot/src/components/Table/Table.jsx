import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [isSorted, setIsSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const maxPageButtons = 10;

  useEffect(() => {
    setSortedData(data);
    setCurrentPage(1);
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

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

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

      {paginatedData.map((row, index) => (
        <div key={index} className="table-row">
          {columns.map((col, i) => (
            <div key={i} className="table-cell">
              {row[col]}
            </div>
          ))}
        </div>
      ))}

      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === startPage + i ? "active" : ""}`}
            onClick={() => setCurrentPage(startPage + i)}
          >
            {startPage + i}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Table;
