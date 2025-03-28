import React, { useState, useEffect } from 'react'
import "./QueryHistory.css"

const QueryHistory = ({ queryHistory, runQueryFromHistory, copyToQueryEditor }) => {

    const historyPerPage = 5;
    const maxPageButtons = 10;
    const [history, setHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        setHistory(queryHistory);
        setCurrentPage(1);
    }, [queryHistory]);

    const totalPages = Math.ceil(history.length / historyPerPage);
    const paginatedData = history.slice(
        (currentPage - 1) * historyPerPage,
        currentPage * historyPerPage
    );

    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);



    return (
        <div>
            {paginatedData.length > 0 && (
                <div className="query-history">
                    <h3>Query History</h3>
                    <ul>
                        {paginatedData.map((query, index) => (
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
            
            {paginatedData.length == 0 && (<div className='no-history'> No history to display. </div>)}

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
    )
}

export default QueryHistory
