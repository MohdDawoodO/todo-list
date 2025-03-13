import { useAtom } from "jotai";
import { items } from "./states";
import { Icon } from "@iconify/react/dist/iconify.js";
import RemoveItem from "./Removeitem";
import CheckItem from "./CheckItem";
import { motion, AnimatePresence, animate, delay } from "framer-motion";

const List = () => {
  const [todos] = useAtom(items);

  return (
    <div className="list">
      <div className="items">
        <AnimatePresence>
          {todos.map((todo: any) => (
            <Item
              todo={todo}
              key={todo.id}
              id={todo.id}
              text={todo.item}
              checked={todo.checked}
            />
          ))}
        </AnimatePresence>
      </div>
      {!todos.length && <h2 className="hint">Add an item...</h2>}
    </div>
  );
};

const Item = ({ text, checked, id, todo }: any) => {
  const [todos, setTodos] = useAtom(items);

  return (
    <motion.div
      variants={listAnim}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`item ${checked ? "checked" : ""}`}
    >
      <h2>{text}</h2>

      <div className="btns">
        <button className="checkBtn" onClick={(e) => CheckItem(e, todo, todos)}>
          <Icon
            icon="mdi:tick"
            width="2rem"
            height="2rem"
            style={{ color: "white" }}
          />
        </button>

        <button
          className="deleteBtn"
          onClick={() => RemoveItem(id, todos, setTodos)}
        >
          <Icon
            icon="mynaui:trash-solid"
            width="1.8rem"
            height="1.8rem"
            style={{ color: "white" }}
          />
        </button>
      </div>
    </motion.div>
  );
};

const listAnim = {
  initial: { x: "-150%" },
  animate: { x: "0%", transition: { duration: 0.2, type: "tween" } },
  exit: {
    x: "1000%",
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

export default List;
