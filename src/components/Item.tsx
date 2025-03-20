import { useAtom } from "jotai";
import { items } from "./states";
import { Icon } from "@iconify/react/dist/iconify.js";
import RemoveItem from "./Removeitem";
import CheckItem from "./CheckItem";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lineAnim, listAnim } from "../animations";

const Item = ({ text, checked, id, todo }: any) => {
  const [todos, setTodos] = useAtom(items);
  const [check, setCheck] = useState(checked);

  const [smallScreen, setSmallScreen]: any = useState(false);
  const [mobileScreen, setMobileScreen]: any = useState(false);

  useEffect(() => {
    screenCheck();
    window.addEventListener("resize", screenCheck);
  }, []);

  function screenCheck() {
    setSmallScreen(screen.width < 1000);
    setMobileScreen(screen.width < 500);
  }

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
      exit={listAnim.exit}
      className={`item ${mobileScreen && check ? "checked" : ""}`}
      style={{ opacity: check ? 0.6 : 1 }}
    >
      <h2>
        <AnimatePresence>
          {check && !mobileScreen && (
            <motion.div
              style={lineStyle}
              variants={lineAnim}
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

export default Item;
