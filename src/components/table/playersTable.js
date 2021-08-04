import { useState } from "react";
import { columns, data } from "../../utils/dataSource";
import { Table } from "antd";
import "antd/dist/antd.css";
import AgeFilter from "../filters/ageFilter";

import "../../App.css";

function PlayersTable() {
  const [columnsData] = useState(columns);
  const [tableData, setTableData] = useState(data);

  return (
    <div className="table-container">
      <div className="filters">
        <AgeFilter setTableData={setTableData} />
      </div>
      <div className="table-component">
        <Table columns={columnsData} dataSource={tableData} />
      </div>
    </div>
  );
}

export default PlayersTable;
