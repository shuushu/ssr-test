import ListItem from "../components/ListItem";
import ItemCreator from "../components/ItemCreator";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../Store";
import Filter from "../components/Filter";
import Status from "../components/Status";
import Head from "next/head";

function List({ env }) {
  const items = useRecoilValue(filteredTodoListState);

  return (
    <>
      <Head>
        <title>[{env}] todoList</title>
      </Head>
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
  const title = "home";
  return {
    title,
    env: process.env.name
  };
};
export default List;
