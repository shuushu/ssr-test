import ListItem from "../components/ListItem";
import ItemCreator from "../components/ItemCreator";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../Store";
import Filter from "../components/Filter";
import Status from "../components/Status";

function List() {
  const items = useRecoilValue(filteredTodoListState);

  return (
    <>
      <ItemCreator />
      <Filter />
      {items.map((todoItem) => (
        <ListItem key={todoItem.id} item={todoItem} />
      ))}
      <Status />
    </>
  );
}
List.getInitialProps = () => {
  const title = "fdf";
  return { title };
};
export default List;
