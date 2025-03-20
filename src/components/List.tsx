import { useAtom } from "jotai";
import { items } from "./states";
import { motion, AnimatePresence } from "framer-motion";
import Item from "./Item";
import { staggerAnim } from "../animations";

const List = () => {
  const [todos] = useAtom(items);

  if (!todos.length) return;

  return (
    <div className="list">
      <motion.div
        variants={staggerAnim}
        initial="initial"
        animate="animate"
        className="items"
      >
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
      </motion.div>
      {!todos.length && <h2 className="hint">Add an item...</h2>}
    </div>
  );
};

export default List;
