import * as React from "react";
import Radio from "@mui/material/Radio";
import { todoListFilterState } from "../Store";
import { useRecoilState } from "recoil";

export default function ColorRadioButtons() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const controlProps = (item) => ({
    checked: filter === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item }
  });

  return (
    <div>
      <Radio {...controlProps("Show All")} />
       Show All
      <Radio {...controlProps("Show Completed")} color="secondary" /> Show
      Completed
      <Radio {...controlProps("Show Uncompleted")} color="success" /> Show
      Uncompleted
    </div>
  );
}
