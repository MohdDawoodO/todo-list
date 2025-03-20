import { useAtom } from "jotai";
import { items } from "./states";
import { motion, AnimatePresence } from "framer-motion";
import Item from "./Item";
import { staggerAnim } from "../animations";

const List = () => {
  const [todos] = useAtom(items);

  return (
    <div className="list">
      <AnimatePresence>
        {todos.length > 0 && (
          <motion.div
            variants={staggerAnim}
            initial="initial"
            animate="animate"
            className="items"
          >
            {todos.map((todo: any) => (
              <Item
                todo={todo}
                key={todo.id}
                id={todo.id}
                text={todo.item}
                checked={todo.checked}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {!todos.length && <h2 className="hint">Add an item...</h2>}
    </div>
  );
};

export default List;
