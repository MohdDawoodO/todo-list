import { useAtom } from "jotai";
import { items } from "./states";
import { Icon } from "@iconify/react/dist/iconify.js";
import RemoveItem from "./Removeitem";
import CheckItem from "./CheckItem";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [check, setCheck] = useState(checked);

  const [smallScreen, setSmallScreen]: any = useState(false);

  useEffect(() => {
    function screenCheck() {
      setSmallScreen(screen.width < 1000);
    }

    screenCheck();

    window.addEventListener("resize", screenCheck);
  }, []);

  const lineStyle: any = {
    position: "absolute",
    top: "50%",
    left: "0%",
    height: smallScreen ? "2px" : "3px",
    background: "black",
  };

  return (
    <motion.div
      variants={listAnim}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`item`}
      style={{ opacity: check ? 0.6 : 1 }}
    >
      <h2>
        <AnimatePresence>
          {check && (
            <motion.div
              style={lineStyle}
              initial={lineAnim.initial}
              animate={lineAnim.animate}
              exit={lineAnim.exit}
              className="line"
            ></motion.div>
          )}
        </AnimatePresence>
        {text}
      </h2>

      <div className="btns">
        <button
          className="checkBtn"
          onClick={() => CheckItem(setCheck, todo, todos)}
        >
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

const lineAnim = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: { duration: 0.4, type: "tween", ease: "easeIn" },
  },
  exit: {
    width: "0%",
    transition: { duration: 0.3, type: "tween", ease: "easeOut" },
  },
};

export default List;
