import { useState } from "react";
import { Slider, Button } from "antd";
import { data } from "../../utils/dataSource";
import "antd/dist/antd.css";
import "../../App.css";

function AgeFilter({ setTableData }) {
  const [ageValue, setAgeValue] = useState(10);

  function onChangeFilter(value) {
    setAgeValue(value);
    var allTableData = data;
    var filteredAgeData = allTableData.filter((data) => data.age === value);
    setTableData(filteredAgeData);
  }
  return (
    <div className="age-filter">
      <p className={"filter-heading"}>
        <strong>Age Filter Slider</strong>
      </p>
      <div className="age-slider">
        <span>10</span>
        <Slider max={45} min={10} onChange={onChangeFilter} value={ageValue} />
        <span>45</span>
      </div>
      <p className="age-value">
        Value :<strong> {ageValue}</strong>
      </p>
      <Button
        className="reset-btn"
        onClick={() => {
          setTableData(data);
          setAgeValue(10);
        }}
      >
        Reset age filters
      </Button>
    </div>
  );
}

export default AgeFilter;
