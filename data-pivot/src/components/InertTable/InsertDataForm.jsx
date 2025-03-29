import React, { useState } from "react";
import "./InsertDataForm.css";

const tableOptions = {
  Users: ["ID", "Name", "Email"],
  Orders: ["OrderID", "Product", "Quantity"],
  Products: ["ProductID", "ProductName", "Price"],
};

const InsertDataForm = () => {
  const [selectedTable, setSelectedTable] = useState("Users");
  const [rows, setRows] = useState([{ id: Date.now(), values: {} }]);

  const columns = tableOptions[selectedTable];

  const handleInputChange = (rowIndex, column, value) => {
    const newRows = [...rows];
    newRows[rowIndex].values[column] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), values: {} }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleInsertData = () => {
    console.log(`Inserted Data into ${selectedTable}:`, rows);
    alert(`Data inserted into ${selectedTable} successfully!`);
    setRows([{ id: Date.now(), values: {} }]);
  };

  return (
    <div className="insert-table">
      <h2>Insert Data</h2>

      <div className="table-options">
        <label>Select Table:</label>
        <select
          className="table-select"
          value={selectedTable}
          onChange={(e) => {
            setSelectedTable(e.target.value);
            setRows([{ id: Date.now(), values: {} }]);
          }}
        >
          {Object.keys(tableOptions).map((table) => (
            <option key={table} value={table}>
              {table}
            </option>
          ))}
        </select>
      </div>

      <div className="table">
        <div className="table-header">
          {columns.map((col, index) => (
            <div key={index} className="table-cell header-cell">
              {col}
            </div>
          ))}
          <div className="table-cell header-cell">Actions</div>
        </div>

        {rows.map((row, rowIndex) => (
          <div key={row.id} className="table-row">
            {columns.map((col, colIndex) => (
              <input
                key={colIndex}
                type="text"
                className="table-cell"
                placeholder={`Enter ${col}`}
                value={row.values[col] || ""}
                onChange={(e) => handleInputChange(rowIndex, col, e.target.value)}
              />
            ))}
            <button className="remove-btn" onClick={() => handleRemoveRow(rowIndex)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <button className="add-btn" onClick={handleAddRow}>
        Add Row
      </button>
      <button className="insert-btn" onClick={handleInsertData}>
        Insert Data
      </button>
    </div>
  );
};

export default InsertDataForm;
