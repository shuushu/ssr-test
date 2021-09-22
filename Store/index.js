import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const items = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return items.filter((list) => list.isComplete);
      case "Show Uncompleted":
        return items.filter((list) => !list.isComplete);
      default:
        return items;
    }
  }
});

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalComplete = todoList.filter((item) => item.isComplete).length;
    const totalNoneComplete = totalNum - totalComplete;
    const per =
      totalNum === 0 ? 0 : (totalComplete / totalNum).toFixed(2) * 100;
    return {
      totalNum,
      totalComplete,
      totalNoneComplete,
      per
    };
  }
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState
};
