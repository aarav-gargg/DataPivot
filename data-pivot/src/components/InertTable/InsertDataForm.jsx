import React, { useState } from "react";
import "./InsertDataForm.css";

const InsertDataForm = ({ columns }) => {
  const [rows, setRows] = useState([{ id: Date.now(), values: {} }]);

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
    console.log("Inserted Data:", rows);
    alert("Data Inserted Successfully!");
    setRows([{ id: Date.now(), values: {} }]); 
  };

  return (
    <div className="insert-table">
      <h2>Insert Data</h2>
      <div className="table">
        <div className="table-header">
          {columns.map((col, index) => (
            <div key={index} className="table-cell header-cell">{col}</div>
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
            <button className="remove-btn" onClick={() => handleRemoveRow(rowIndex)}>❌</button>
          </div>
        ))}
      </div>

      <button className="add-btn" onClick={handleAddRow}>➕ Add Row</button>
      <button className="insert-btn" onClick={handleInsertData}>📥 Insert Data</button>
    </div>
  );
};

export default InsertDataForm;
