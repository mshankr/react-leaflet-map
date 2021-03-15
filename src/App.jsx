import GJMap from "./GJMap";
import { companies } from "./data";
import Table from "./Table";
import React, { useState } from "react";

export const App = () => {
  const [highlightIdx, setHighlightIdx] = useState(-1);
  console.log(companies);
  return (
    <div className="debug-grid overflow-hidden root-container">
      <GJMap
        className="GJMap"
        style={{ height: "100vh" }}
        markerData={companies}
        highlightIdx={highlightIdx}
      />
      <Table
        className="my-table"
        tableData={companies}
        setHighlightIdx={setHighlightIdx}
      />
    </div>
  );
};
