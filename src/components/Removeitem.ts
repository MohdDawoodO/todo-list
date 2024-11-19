import GetLocal from "./GetLocal";

const RemoveItem = (id: string, todos: any, setTodos: any) => {
  const newItems = todos.filter((todo: any) => todo.id !== id);

  localStorage.setItem("todos", JSON.stringify(newItems));
  GetLocal(setTodos);
};

export default RemoveItem;
