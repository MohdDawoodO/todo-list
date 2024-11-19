import { Icon } from "@iconify/react/dist/iconify.js";
import { items } from "./states";
import { useSetAtom } from "jotai";
import AddItem from "./AddItem";
import { useState } from "react";

const Form = () => {
  const setTodos = useSetAtom(items);
  const [text, setText] = useState("");

  const addTodo = (e: any) => {
    e.preventDefault();
    AddItem(text, setTodos);
    setText("");
  };

  return (
    <div className="form">
      <h1>
        My <span>Todo List</span>
      </h1>
      <form onSubmit={addTodo}>
        <div className="fill-form">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            required
          />
          <button type="submit">
            <Icon icon="basil:add-solid" width="1.75rem" height="1.75rem" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
