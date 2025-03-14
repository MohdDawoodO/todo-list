const CheckItem = (setCheck: any, todo: any, todos: any) => {
  setCheck(!todo.checked);
  todo.checked = !todo.checked;
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default CheckItem;
