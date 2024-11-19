import { v4 as uuid } from "uuid";
import GetLocal from "./GetLocal";

const AddItem = (text: string, setTodos: any) => {
  let x = JSON.parse(localStorage.getItem("todos") ?? "[]");
  const obj = { item: text, checked: false, id: uuid() };
  x.push(obj);
  localStorage.setItem("todos", JSON.stringify(x));
  GetLocal(setTodos);
};

export default AddItem;
