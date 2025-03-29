# SQL Query Runner

## Overview  
This project provides a **simple yet efficient** interface for running **SQL queries (dummy execution)** and displaying results in a structured **table format**.  

### Key Features 
- **SQL Code Editor** – Input and run SQL queries.  
- **Query History** – View up to **50 previously executed queries**.  
- **Predefined Queries** – Quick selection using a **dropdown toggle**.  
- **Execute/Modify from History** – Directly run past queries or copy them for edits.  
- **Light/Dark Mode** – Toggle between themes for better visibility.  
- **Table Sorting & Pagination** – View up to **10 rows per page** for improved readability.  
- **Insert Query Feature** – Users can **manually enter data** instead of writing insert statements.  

---

##  Live Demo  
**Deployed Application:** [Data Pivot](https://data-pivot.vercel.app/)  

---

## Tech Stack & Dependencies 🛠  

### Framework Used  
- **React.js** – Frontend framework for building UI components.  

### Styling  
- **Standard CSS** – Used for styling with **media queries** for responsiveness.  

### Installed Dependencies  
- **[@codemirror/lang-sql](https://www.npmjs.com/package/@codemirror/lang-sql)** – Enables **SQL syntax highlighting** in CodeMirror.  
- **[@uiw/react-codemirror](https://www.npmjs.com/package/@uiw/react-codemirror)** – A **React wrapper** for CodeMirror, making integration smoother.  

---

## Performance & Page Load Time  

### Measured Using:  
- **Performance API:** `performance.now()` → **1869.5 ms**  
- **Lighthouse Analysis:**  
  - **First Contentful Paint (FCP):** **0.5s**  
  - **Largest Contentful Paint (LCP):** **0.5s**  
  - **Total Blocking Time:** **80ms**  

---

## Optimizations to Improve Load Time
- **Lightweight CodeMirror Installation** – Installed only `@uiw/react-codemirror` & `@codemirror/lang-sql`, avoiding the full `codemirror` package to reduce **bundle size**.  
- **Used Vite Instead of Webpack** – Faster build process, improving overall app speed.  
- **Implemented Pagination** – Prevents rendering excessive rows, ensuring the app remains **smooth and responsive**.  

---

