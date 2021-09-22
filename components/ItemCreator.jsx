import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../Store";

export default function ItemCrator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: inputValue,
        isComplete: false
      }
    ]);

    setInputValue("");
  };

  return (
    <Grid container spacing={3} columns={2}>
      <Grid item xs zeroMinWidth>
        <TextField
          id="outlined-basic"
          fullWidth
          size="small"
          label="Outlined"
          variant="outlined"
          value={inputValue}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <Button onClick={addItem} variant="contained">
          Contained
        </Button>
      </Grid>
    </Grid>
  );
}

let id = 0;
function getId() {
  return id++;
}
