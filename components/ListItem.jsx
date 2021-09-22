import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { todoListState } from "../Store";
import { useRecoilState } from "recoil";

export default function CheckboxList({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const handleToggle = (value) => () => {};
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={deleteItem}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          //onClick={handleToggle(index)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={item.isComplete}
              tabIndex={-1}
              disableRipple
              onChange={toggleItemCompletion}
            />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
