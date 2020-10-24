import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function SearchComponent() {
  const [, setstartdate] = useState(new Date());
  const [, setenddate] = useState(new Date());
  const history=useHistory();
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setstartdate(ranges.selection.startDate);
    setenddate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" name="" id="" />
      <Button onClick={()=>history.push('/search')}>Search Airbnb</Button>
    </div>
  );
}
export default SearchComponent;
