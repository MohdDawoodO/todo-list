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

  const changeInputValue = (e: any) => {
    const inputValue = e.target.value;
    const checkSpace = inputValue.includes(" ") || inputValue.length <= 22;

    if (checkSpace) setText(inputValue);

    if (/(.)\1{5,}/.test(inputValue)) return;
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
            maxLength={40}
            onChange={(e) => changeInputValue(e)}
            type="text"
            required
          />
          <button type="submit">
            <Icon
              icon="basil:add-solid"
              width="2.2rem"
              height="2.2rem"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
