const GetLocal = (setTodos: any) => {
  let x = JSON.parse(localStorage.getItem("todos") ?? "[]");
  setTodos(x);
};

export default GetLocal;
