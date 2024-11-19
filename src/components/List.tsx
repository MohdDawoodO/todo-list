import { useAtom } from "jotai";
import { items } from "./states";
import { Icon } from "@iconify/react/dist/iconify.js";
import RemoveItem from "./Removeitem";

const List = () => {
  const [todos, setTodos] = useAtom(items);

  if (!todos.length) return;
  return (
    <div className="list">
      {todos.map((todo: any) => (
        <Item
          key={todo.id}
          id={todo.id}
          text={todo.item}
          checked={todo.checked}
        />
      ))}
    </div>
  );
};

const Item = ({ text, checked, id }: any) => {
  const [todos, setTodos] = useAtom(items);

  return (
    <div className={`item ${checked ? "checked" : ""}`}>
      <h3>{text}</h3>
      <button className="completeBtn">
        <Icon icon="mdi:tick" width="28" height="28" />
      </button>
      <button
        className="deleteBtn"
        onClick={() => RemoveItem(id, todos, setTodos)}
      >
        <Icon icon="mynaui:trash-solid" width="28" height="28" />
      </button>
    </div>
  );
};

export default List;
