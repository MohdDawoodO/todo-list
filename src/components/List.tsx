import { useAtom } from "jotai";
import { items } from "./states";
import { Icon } from "@iconify/react/dist/iconify.js";
import RemoveItem from "./Removeitem";
import CheckItem from "./CheckItem";

const List = () => {
  const [todos] = useAtom(items);

  if (!todos.length) return;
  return (
    <div className="list">
      {todos.map((todo: any) => (
        <Item
          todo={todo}
          key={todo.id}
          id={todo.id}
          text={todo.item}
          checked={todo.checked}
        />
      ))}
    </div>
  );
};

const Item = ({ text, checked, id, todo }: any) => {
  const [todos, setTodos] = useAtom(items);

  return (
    <div className={`item ${checked ? "checked" : ""}`}>
      <h2>{text}</h2>

      <button
        className="completeBtn"
        onClick={(e) => CheckItem(e, todo, todos)}
      >
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
