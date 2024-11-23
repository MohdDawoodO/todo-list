import GetLocal from "./GetLocal";

const RemoveItem = (e: any, id: string, todos: any, setTodos: Function) => {
  const newItems = todos.filter((todo: any) => todo.id !== id);
  const btns = e.target.parentElement;
  const item = btns.parentElement;

  item.classList.add("removed");
  item.addEventListener("transitionend", (e: any) => {
    localStorage.setItem("todos", JSON.stringify(newItems));
    GetLocal(setTodos);
  });
};

export default RemoveItem;
